import React from 'react';

export default function CRTOverlay() {
  return (
    <>
      {/* CRT Screen Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        {/* Scanlines - taille intermédiaire */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              repeating-linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.4) 0px,
                rgba(0, 0, 0, 0.4) 1.5px,
                transparent 2px,
                transparent 4px
              )
            `,
            opacity: 0.5,
          }}
        />

        {/* Film grain */}
        <div
          className="absolute inset-0 animate-grain"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent 0px,
                rgba(255, 255, 255, 0.03) 1px,
                transparent 2px,
                rgba(0, 0, 0, 0.04) 3px,
                transparent 4px
              )
            `,
            opacity: 0.3,
            mixBlendMode: 'overlay',
          }}
        />

        {/* Flicker effect */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(255, 255, 255, 0.015)',
            animation: 'crt-flicker 0.15s infinite',
            mixBlendMode: 'overlay',
          }}
        />
      </div>

      <style>{`
        @keyframes crt-flicker {
          0% { opacity: 0.5; }
          5% { opacity: 0.7; }
          10% { opacity: 0.6; }
          15% { opacity: 0.55; }
          20% { opacity: 0.65; }
          25% { opacity: 0.58; }
          30% { opacity: 0.62; }
          35% { opacity: 0.60; }
          40% { opacity: 0.63; }
          45% { opacity: 0.57; }
          50% { opacity: 0.68; }
          55% { opacity: 0.59; }
          60% { opacity: 0.64; }
          65% { opacity: 0.61; }
          70% { opacity: 0.56; }
          75% { opacity: 0.66; }
          80% { opacity: 0.62; }
          85% { opacity: 0.58; }
          90% { opacity: 0.64; }
          95% { opacity: 0.60; }
          100% { opacity: 0.5; }
        }

        @keyframes animate-grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-1%, -1%); }
          20% { transform: translate(-2%, 2%); }
          30% { transform: translate(1%, -1%); }
          40% { transform: translate(-1%, 2%); }
          50% { transform: translate(-2%, -2%); }
          60% { transform: translate(2%, 1%); }
          70% { transform: translate(1%, -2%); }
          80% { transform: translate(-2%, 1%); }
          90% { transform: translate(2%, -1%); }
        }

        .animate-grain {
          animation: animate-grain 8s steps(10) infinite;
        }
      `}</style>
    </>
  );
}
