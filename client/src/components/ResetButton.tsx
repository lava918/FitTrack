import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { resetWeekData } from "@/utils/storage";

export default function ResetButton({ onReset }: { onReset: () => void }) {
  const [showModal, setShowModal] = useState(false);

  const handleConfirmReset = () => {
    resetWeekData();
    setShowModal(false);
    onReset();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        className="flex justify-center mt-12"
      >
        <motion.button
          onClick={() => setShowModal(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-destructive text-destructive-foreground px-6 py-3 font-bold tracking-wide uppercase transition-all hover:bg-red-700"
          data-testid="button-reset"
        >
          Reset Week
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setShowModal(false)}
            data-testid="modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.3 }}
              className="bg-card border-2 border-card-border p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
              data-testid="modal-content"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-destructive" data-testid="icon-warning" />
                <h3 className="text-2xl font-bold tracking-wide uppercase text-white" data-testid="text-modal-title">
                  Confirm Reset
                </h3>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed" data-testid="text-modal-message">
                Are you sure you want to reset all your weekly data? This action cannot be undone and will permanently delete all your logged entries.
              </p>

              <div className="flex gap-4">
                <motion.button
                  onClick={() => setShowModal(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-card-border text-white px-6 py-3 font-semibold tracking-wide uppercase hover:brightness-110"
                  data-testid="button-cancel"
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={handleConfirmReset}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-primary text-primary-foreground px-6 py-3 font-semibold tracking-wide uppercase hover:brightness-110"
                  data-testid="button-confirm"
                >
                  Confirm
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
