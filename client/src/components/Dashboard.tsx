import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { HealthEntry } from "@/utils/storage";

interface DashboardProps {
  stepsData: HealthEntry[];
  caloriesData: HealthEntry[];
  waterData: HealthEntry[];
}

export default function Dashboard({ stepsData, caloriesData, waterData }: DashboardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const formattedSteps = stepsData.map((entry) => ({
    date: formatDate(entry.date),
    value: entry.value,
  }));

  const formattedCalories = caloriesData.map((entry) => ({
    date: formatDate(entry.date),
    value: entry.value,
  }));

  const formattedWater = waterData.map((entry) => ({
    date: formatDate(entry.date),
    value: entry.value,
  }));

  const charts = [
    {
      id: 'steps',
      title: 'Steps - Last 7 Days',
      data: formattedSteps,
      color: '#00FFFF',
      testId: 'chart-steps',
    },
    {
      id: 'calories',
      title: 'Calories - Last 7 Days',
      data: formattedCalories,
      color: '#00FFFF',
      testId: 'chart-calories',
    },
    {
      id: 'water',
      title: 'Water - Last 7 Days',
      data: formattedWater,
      color: '#00FFFF',
      testId: 'chart-water',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {charts.map((chart, index) => (
        <motion.div
          key={chart.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
          className="bg-card border-2 border-card-border p-6 shadow-xl"
          data-testid={`card-${chart.testId}`}
        >
          <h3 className="text-lg md:text-xl font-bold tracking-wide uppercase text-white mb-4" data-testid={`title-${chart.testId}`}>
            {chart.title}
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={chart.data} data-testid={chart.testId}>
              <defs>
                <linearGradient id={`gradient-${chart.id}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chart.color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={chart.color} stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis
                dataKey="date"
                stroke="#ffffff"
                tick={{ fill: '#ffffff', fontSize: 12 }}
                tickLine={{ stroke: '#374151' }}
              />
              <YAxis
                stroke="#ffffff"
                tick={{ fill: '#ffffff', fontSize: 12 }}
                tickLine={{ stroke: '#374151' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#111827',
                  border: '2px solid #00FFFF',
                  borderRadius: '0',
                  color: '#ffffff',
                }}
                labelStyle={{ color: '#00FFFF', fontWeight: 'bold' }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={chart.color}
                strokeWidth={3}
                dot={{ fill: chart.color, r: 5 }}
                activeDot={{ r: 7, fill: chart.color }}
                fill={`url(#gradient-${chart.id})`}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      ))}
    </div>
  );
}
