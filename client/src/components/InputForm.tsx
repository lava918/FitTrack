import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { addEntry, getTodayEntry, getHealthData } from "@/utils/storage";

export default function InputForm({ onSave }: { onSave: () => void }) {
  const data = getHealthData();
  const [steps, setSteps] = useState(getTodayEntry(data.steps).toString());
  const [calories, setCalories] = useState(getTodayEntry(data.calories).toString());
  const [water, setWater] = useState(getTodayEntry(data.water).toString());
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const validateAndSave = () => {
    const newErrors: string[] = [];
    
    const stepsNum = parseFloat(steps);
    const caloriesNum = parseFloat(calories);
    const waterNum = parseFloat(water);

    if (!steps || isNaN(stepsNum) || stepsNum < 0) {
      newErrors.push("Please enter valid steps (must be 0 or greater)");
    }
    if (!calories || isNaN(caloriesNum) || caloriesNum < 0) {
      newErrors.push("Please enter valid calories (must be 0 or greater)");
    }
    if (!water || isNaN(waterNum) || waterNum < 0) {
      newErrors.push("Please enter valid water intake (must be 0 or greater)");
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors([]);
    
    addEntry('steps', stepsNum);
    addEntry('calories', caloriesNum);
    addEntry('water', waterNum);

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onSave();
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="bg-card border-2 border-card-border p-6 md:p-8"
      data-testid="form-container"
    >
      <h2 className="text-xl md:text-2xl font-bold tracking-wide uppercase text-white mb-6" data-testid="text-form-title">
        Daily Entry
      </h2>
      
      {errors.length > 0 && (
        <div className="mb-4 p-3 bg-destructive/20 border border-destructive" data-testid="error-message">
          {errors.map((error, idx) => (
            <p key={idx} className="text-destructive-foreground text-sm">
              {error}
            </p>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
        <div data-testid="input-group-steps">
          <label
            htmlFor="steps"
            className="block text-xs font-semibold tracking-wide uppercase text-gray-400 mb-2"
            data-testid="label-steps"
          >
            Steps
          </label>
          <input
            id="steps"
            type="number"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full bg-black border-2 border-card-border text-white px-4 py-3 focus:border-primary focus:outline-none transition-colors"
            placeholder="0"
            min="0"
            data-testid="input-steps"
          />
        </div>

        <div data-testid="input-group-calories">
          <label
            htmlFor="calories"
            className="block text-xs font-semibold tracking-wide uppercase text-gray-400 mb-2"
            data-testid="label-calories"
          >
            Calories
          </label>
          <input
            id="calories"
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            className="w-full bg-black border-2 border-card-border text-white px-4 py-3 focus:border-primary focus:outline-none transition-colors"
            placeholder="0"
            min="0"
            data-testid="input-calories"
          />
        </div>

        <div data-testid="input-group-water">
          <label
            htmlFor="water"
            className="block text-xs font-semibold tracking-wide uppercase text-gray-400 mb-2"
            data-testid="label-water"
          >
            Water (Liters)
          </label>
          <input
            id="water"
            type="number"
            step="0.1"
            value={water}
            onChange={(e) => setWater(e.target.value)}
            className="w-full bg-black border-2 border-card-border text-white px-4 py-3 focus:border-primary focus:outline-none transition-colors"
            placeholder="0.0"
            min="0"
            data-testid="input-water"
          />
        </div>
      </div>

      <div className="relative">
        <motion.button
          onClick={validateAndSave}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full md:w-auto bg-primary text-primary-foreground px-8 py-3 font-semibold tracking-wide uppercase transition-all hover:brightness-110 relative overflow-hidden"
          data-testid="button-save"
        >
          <span className={showSuccess ? "opacity-0" : "opacity-100"}>
            Save Entry
          </span>
          
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute inset-0 flex items-center justify-center"
                data-testid="icon-success"
              >
                <Check className="w-6 h-6 text-primary-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  );
}
