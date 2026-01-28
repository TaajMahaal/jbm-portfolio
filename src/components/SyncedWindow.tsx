import React, { forwardRef } from 'react';
import { motion, type MotionProps } from 'framer-motion';
import { useSynchronizedBorder } from '../hooks/useSynchronizedBorder';

interface SyncedWindowProps extends Omit<MotionProps, 'children' | 'ref'> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const SyncedWindow = forwardRef<HTMLDivElement, SyncedWindowProps>(
  ({ children, className = '', style, ...motionProps }, externalRef) => {
    const { ref, backgroundPosition } = useSynchronizedBorder();

    return (
      <motion.div
        ref={(node) => {
          // Handle both internal and external refs
          if (typeof externalRef === 'function') {
            externalRef(node);
          } else if (externalRef) {
            (externalRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={className}
        style={{
          ...style,
          ['--border-bg-position' as string]: backgroundPosition,
        } as React.CSSProperties}
        {...motionProps}
      >
        {children}
      </motion.div>
    );
  }
);

SyncedWindow.displayName = 'SyncedWindow';

export default SyncedWindow;
