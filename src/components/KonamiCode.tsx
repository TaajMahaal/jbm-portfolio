import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export default function KonamiCode() {
  const [keys, setKeys] = useState<string[]>([]);
  const [activated, setActivated] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, e.key].slice(-10);

        if (newKeys.join(',') === KONAMI_CODE.join(',')) {
          setActivated(true);
          setShowMessage(true);
          return [];
        }

        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => setShowMessage(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <AnimatePresence>
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
        >
          <div className="retro-window p-8 text-center space-y-4">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 0.9, 1.1, 1],
              }}
              transition={{ duration: 0.6, repeat: 2 }}
              className="text-6xl"
            >
              🎮
            </motion.div>
            <h2 className="text-2xl font-bold glitch" data-text="KONAMI CODE ACTIVATED!">
              KONAMI CODE ACTIVATED!
            </h2>
            <p className="text-gold-400">You found the secret!</p>
            <p className="text-sm text-gray-400">
              Easter eggs are like hidden commits in production...
              <br />
              They're there, waiting to be discovered. 😉
            </p>
            <div className="text-xs text-gray-500 mt-4">
              <p>-- A message from your friendly neighborhood engineer</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
