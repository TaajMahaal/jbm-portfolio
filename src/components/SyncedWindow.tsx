import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useSynchronizedBorder } from '../hooks/useSynchronizedBorder';

interface SyncedWindowProps {
  children: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
  [key: string]: any;
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
          // @ts-ignore - CSS custom property
          '--border-bg-position': backgroundPosition,
        } as any}
        {...motionProps}
      >
        {children}
      </motion.div>
    );
  }
);

SyncedWindow.displayName = 'SyncedWindow';

export default SyncedWindow;
