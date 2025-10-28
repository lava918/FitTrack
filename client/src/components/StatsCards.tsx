import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { TrendingUp, Flame, Droplets } from "lucide-react";

interface StatsCardsProps {
  totalSteps: number;
  avgCalories: number;
  totalWater: string;
}

function AnimatedNumber({ value }: { value: number }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(motionValue, value, { duration: 0.6, ease: "easeOut" });
    return controls.stop;
  }, [motionValue, value]);

  return <motion.span>{rounded}</motion.span>;
}

function AnimatedDecimal({ value }: { value: string }) {
  const numValue = parseFloat(value);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => latest.toFixed(1));

  useEffect(() => {
    const controls = animate(motionValue, numValue, { duration: 0.6, ease: "easeOut" });
    return controls.stop;
  }, [motionValue, numValue]);

  return <motion.span>{rounded}</motion.span>;
}

export default function StatsCards({ totalSteps, avgCalories, totalWater }: StatsCardsProps) {
  const stats = [
    {
      id: 'steps',
      label: 'Weekly Total Steps',
      value: totalSteps.toLocaleString(),
      icon: TrendingUp,
      testId: 'stat-steps',
    },
    {
      id: 'calories',
      label: 'Avg Daily Calories',
      value: avgCalories.toLocaleString(),
      icon: Flame,
      testId: 'stat-calories',
    },
    {
      id: 'water',
      label: 'Total Water (L)',
      value: totalWater,
      icon: Droplets,
      testId: 'stat-water',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="bg-black border-2 border-card-border p-6 transition-all hover:border-primary hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
          data-testid={`card-${stat.testId}`}
        >
          <div className="flex items-center justify-between mb-4">
            <stat.icon className="w-6 h-6 text-primary" data-testid={`icon-${stat.testId}`} />
            <span className="text-xs font-semibold tracking-wide uppercase text-primary" data-testid={`label-${stat.testId}`}>
              {stat.label}
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white"
            data-testid={`value-${stat.testId}`}
          >
            {stat.id === 'water' ? (
              <AnimatedDecimal value={stat.value} />
            ) : (
              <AnimatedNumber value={parseInt(stat.value.replace(/,/g, ''))} />
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
