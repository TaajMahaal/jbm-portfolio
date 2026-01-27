import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CRTOverlay from './CRTOverlay';

interface BootSequenceProps {
  onComplete: () => void;
}

const bootMessages = [
  '[    0.000000] Linux version 6.6.0-jbm (jbm@portfolio)',
  '[    0.000000] Command line: portfolio init --mode=interactive',
  '[    0.012453] Kernel command line: BOOT_IMAGE=/vmlinuz root=/dev/portfolio',
  '[    0.034562] Memory: 16GB RAM available',
  '[    0.056789] CPU: Engineering Manager Edition @ 3.4GHz',
  '',
  '[    0.123456] Initializing workspace...',
  '[    0.234567] Loading portfolio modules',
  '[    0.345678] ✓ microservices.ko loaded',
  '[    0.456789] ✓ kubernetes.ko loaded',
  '[    0.567890] ✓ terraform.ko loaded',
  '[    0.678901] ✓ security.ko loaded',
  '',
  '[    0.789012] Starting services...',
  '[    0.890123] ✓ experience.service - active',
  '[    0.901234] ✓ skills.service - active',
  '[    1.012345] ✓ terminal.service - active',
  '',
  '[    1.123456] All systems operational',
  '[    1.234567] jbm@portfolio ready',
  '',
  '           Press any key to enter workspace',
];

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLine < bootMessages.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, bootMessages[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
    }
  }, [currentLine, isComplete]);

  useEffect(() => {
    const handleKeyPress = () => {
      if (isComplete) {
        onComplete();
      }
    };

    const handleClick = () => {
      if (isComplete) {
        onComplete();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('click', handleClick);
    };
  }, [isComplete, onComplete]);

  return (
    <AnimatePresence>
      <CRTOverlay />
      <div className="crt-sweep" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center z-50 px-48 py-12"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #0a1a1c 50%, #000000 100%)',
          animation: 'brightness-pulse 30s ease-in-out infinite',
        }}
      >

        <div className="w-full max-w-4xl relative">
          {/* Gradient glow overlay */}
          <div
            className="absolute inset-0 rounded-lg opacity-30 blur-3xl"
            style={{
              background: 'radial-gradient(circle at center, rgba(79, 209, 197, 0.3) 0%, transparent 70%)',
            }}
          />

          <div className="font-mono text-sm space-y-1 relative z-10">
            {displayedLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`boot-text ${
                  line.includes('✓')
                    ? 'text-teal-400 text-shadow-teal'
                    : line.includes('ERROR') || line.includes('FAIL')
                    ? 'text-red-500'
                    : 'text-gray-400'
                }`}
              >
                {line}
              </motion.div>
            ))}

            {isComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 0.8, repeatType: 'reverse' }}
                className="text-gold-400 text-shadow-gold mt-4"
              >
                ▊
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
