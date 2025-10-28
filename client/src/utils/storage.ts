export interface HealthEntry {
  date: string;
  value: number;
}

export interface HealthData {
  steps: HealthEntry[];
  calories: HealthEntry[];
  water: HealthEntry[];
}

const STORAGE_KEY = 'fittrack_data';

export const getHealthData = (): HealthData => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      if (parsed && typeof parsed === 'object' && 
          Array.isArray(parsed.steps) && 
          Array.isArray(parsed.calories) && 
          Array.isArray(parsed.water)) {
        return parsed;
      }
    }
  } catch (error) {
    console.error('Error reading health data from localStorage:', error);
  }
  
  return {
    steps: [],
    calories: [],
    water: [],
  };
};

export const saveHealthData = (data: HealthData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving health data to localStorage:', error);
  }
};

export const addEntry = (
  type: 'steps' | 'calories' | 'water',
  value: number
): void => {
  const data = getHealthData();
  const today = new Date().toISOString().split('T')[0];
  
  const existingEntryIndex = data[type].findIndex(
    (entry) => entry.date === today
  );

  if (existingEntryIndex >= 0) {
    data[type][existingEntryIndex].value = value;
  } else {
    data[type].push({ date: today, value });
  }

  data[type].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  saveHealthData(data);
};

export const resetWeekData = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error resetting health data from localStorage:', error);
  }
};

export const getLast7Days = (entries: HealthEntry[]): HealthEntry[] => {
  const last7Days: string[] = [];
  const today = new Date();
  
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    last7Days.push(date.toISOString().split('T')[0]);
  }

  return last7Days.map((date) => {
    const entry = entries.find((e) => e.date === date);
    return entry || { date, value: 0 };
  });
};

export const getTodayEntry = (entries: HealthEntry[]): number => {
  const today = new Date().toISOString().split('T')[0];
  const entry = entries.find((e) => e.date === today);
  return entry?.value || 0;
};

export const getWeeklyStats = (data: HealthData) => {
  const last7Steps = getLast7Days(data.steps);
  const last7Calories = getLast7Days(data.calories);
  const last7Water = getLast7Days(data.water);

  const totalSteps = last7Steps.reduce((sum, entry) => sum + entry.value, 0);
  const avgCalories = Math.round(
    last7Calories.reduce((sum, entry) => sum + entry.value, 0) / 7
  );
  const totalWater = last7Water.reduce((sum, entry) => sum + entry.value, 0);

  return {
    totalSteps,
    avgCalories,
    totalWater: totalWater.toFixed(1),
  };
};
