import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CRTOverlay from './CRTOverlay';

interface BootSequenceProps {
  onComplete: () => void;
}

const bootMessages = [
  '[    0.000000] JBM Portfolio System v2026.1',
  '[    0.000000] Command line: portfolio init --mode=holographic',
  '[    0.012453] Booting from /dev/experience',
  '[    0.034562] Memory: 16 years of tech experience',
  '[    0.056789] CPU: Software Craftsman @ ∞ GHz',
  '',
  '[    0.123456] Initializing workspace...',
  '[    0.234567] Loading core modules...',
  '[    0.345678] ✓ go.ko loaded',
  '[    0.356789] ✓ elixir.ko loaded',
  '[    0.367890] ✓ ai-integration.ko loaded',
  '[    0.378901] ✓ kubernetes.ko loaded',
  '[    0.389012] WARNING: coffee.ko not found, using default caffeine levels',
  '[    0.456789] ✓ security-architecture.ko loaded',
  '[    0.567890] ✓ microservices.ko loaded',
  '',
  '[    0.678901] Scanning for bugs... 0 found (suspicious)',
  '[    0.789012] Applying holographic gradients...',
  '[    0.890123] Initializing interactive skill highlighting...',
  '[    0.901234] ✓ AI assistant reports: "I may have achieved sentience"',
  '',
  '[    1.012345] Starting services...',
  '[    1.123456] ✓ experience.service - 10 positions loaded',
  '[    1.234567] ✓ skills.service - interactive highlighting enabled',
  '[    1.345678] ✓ terminal.service - easter eggs armed',
  '[    1.456789] ✓ timeline.service - gradient animation active',
  '',
  '[    1.567890] Checking for Konami code listeners... ready',
  '[    1.678901] Verifying retro aesthetic... approved',
  '[    1.789012] All systems operational',
  '[    1.890123] Status: online | Location: Limoges | Browser: detected',
  '[    2.000000] jbm@portfolio ready',
  '',
  '           Press any key or click to enter',
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
