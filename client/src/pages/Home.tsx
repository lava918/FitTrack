import { useState, useEffect } from "react";
import Header from "@/components/Header";
import InputForm from "@/components/InputForm";
import StatsCards from "@/components/StatsCards";
import Dashboard from "@/components/Dashboard";
import ResetButton from "@/components/ResetButton";
import { getHealthData, getLast7Days, getWeeklyStats } from "@/utils/storage";

export default function Home() {
  const [data, setData] = useState(getHealthData());
  const [stats, setStats] = useState(getWeeklyStats(data));

  const refreshData = () => {
    const newData = getHealthData();
    setData(newData);
    setStats(getWeeklyStats(newData));
  };

  useEffect(() => {
    refreshData();
  }, []);

  const last7Steps = getLast7Days(data.steps);
  const last7Calories = getLast7Days(data.calories);
  const last7Water = getLast7Days(data.water);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900" data-testid="page-home">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 space-y-12 md:space-y-20">
        <section data-testid="section-input">
          <InputForm onSave={refreshData} />
        </section>

        <section data-testid="section-stats">
          <StatsCards
            totalSteps={stats.totalSteps}
            avgCalories={stats.avgCalories}
            totalWater={stats.totalWater}
          />
        </section>

        <section data-testid="section-charts">
          <Dashboard
            stepsData={last7Steps}
            caloriesData={last7Calories}
            waterData={last7Water}
          />
        </section>

        <section data-testid="section-reset">
          <ResetButton onReset={refreshData} />
        </section>
      </main>
    </div>
  );
}
