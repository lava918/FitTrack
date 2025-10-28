import { motion } from "framer-motion";
import { FaDumbbell } from "react-icons/fa";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-black py-8 text-center border-b-2 border-gray-800"
      data-testid="header-main"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-2">
          <FaDumbbell className="text-primary text-2xl" data-testid="icon-logo" />
          <h1
            className="text-4xl md:text-5xl font-black tracking-widest text-white uppercase"
            data-testid="text-title"
          >
            FITTRACK
          </h1>
          <FaDumbbell className="text-primary text-2xl" data-testid="icon-logo-2" />
        </div>
        <p
          className="text-sm md:text-base font-light tracking-widest text-primary uppercase"
          data-testid="text-tagline"
        >
          Track. Train. Triumph.
        </p>
      </div>
    </motion.header>
  );
}
