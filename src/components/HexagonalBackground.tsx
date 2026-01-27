import React, { useEffect, useRef } from 'react';

// Génère les points d'un hexagone
const hexPoints = (cx: number, cy: number, size: number) => {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    const x = cx + size * Math.cos(angle);
    const y = cy + size * Math.sin(angle);
    points.push(`${x},${y}`);
  }
  return points.join(' ');
};

export default function HexagonalBackground() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions] = React.useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080
  });

  // Génère hexagones répartis sur toute la surface - UNE SEULE FOIS
  const hexagons = React.useMemo(() => {
    const hexes = [];
    const spacing = 450;
    // Use larger dimensions to ensure coverage even after resize
    const maxWidth = Math.max(dimensions.width, 2560);
    const maxHeight = Math.max(dimensions.height, 1440);
    const cols = Math.ceil(maxWidth / spacing);
    const rows = Math.ceil(maxHeight / spacing);

    for (let i = 0; i < cols * rows; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      // Offset aléatoire pour casser la grille tout en évitant les chevauchements
      const x = col * spacing + spacing / 2 + (Math.random() - 0.5) * 80;
      const y = row * spacing + spacing / 2 + (Math.random() - 0.5) * 80;

      hexes.push({
        x,
        y,
        size: 20 + Math.random() * 100,
        opacity: 0.05 + Math.random() * 0.12,
        duration: 20 + Math.random() * 20,
        delay: Math.random() * 10,
        dx: (Math.random() - 0.5) * 50,
        dy: (Math.random() - 0.5) * 50,
        rotation: Math.random() * 360,
      });
    }
    return hexes;
  }, []); // Empty dependency array - generate only once

  // Hexagones pulsants (environ 6-8) - UNE SEULE FOIS
  const pulsingHexagons = React.useMemo(() => {
    const count = 7;
    const spacing = 450;
    const maxWidth = Math.max(dimensions.width, 2560);
    const maxHeight = Math.max(dimensions.height, 1440);
    const cols = Math.ceil(maxWidth / spacing);
    const rows = Math.ceil(maxHeight / spacing);
    const totalCells = cols * rows;

    // Sélectionner des cellules aléatoires sans répétition
    const usedCells = new Set<number>();
    const hexes = [];

    for (let i = 0; i < Math.min(count, totalCells); i++) {
      let cellIndex;
      do {
        cellIndex = Math.floor(Math.random() * totalCells);
      } while (usedCells.has(cellIndex));

      usedCells.add(cellIndex);

      const col = cellIndex % cols;
      const row = Math.floor(cellIndex / cols);

      // Offset aléatoire pour casser la grille
      const x = col * spacing + spacing / 2 + (Math.random() - 0.5) * 80;
      const y = row * spacing + spacing / 2 + (Math.random() - 0.5) * 80;

      // Premier hexagone = énorme, les autres 50% plus petits
      const size = i === 0
        ? 130 + Math.random() * 70   // Énorme : 130-200
        : 30 + Math.random() * 90;    // Petits : 30-120

      hexes.push({
        x,
        y,
        size,
        duration: 4 + Math.random() * 3,
        delay: Math.random() * 3,
        rotation: Math.random() * 360,
      });
    }

    return hexes;
  }, []); // Empty dependency array - generate only once

  // Connexions entre hexagones pulsants
  const connections = React.useMemo(() => {
    const conns = [];
    for (let i = 0; i < pulsingHexagons.length - 1; i++) {
      if (Math.random() > 0.5 && i < pulsingHexagons.length - 1) {
        const from = pulsingHexagons[i];
        const to = pulsingHexagons[i + 1];
        const distance = Math.sqrt(
          Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2)
        );
        // Seulement connecter si pas trop loin
        if (distance < 600) {
          conns.push({
            from: { x: from.x, y: from.y },
            to: { x: to.x, y: to.y },
            delay: Math.random() * 2,
          });
        }
      }
    }
    return conns;
  }, [pulsingHexagons]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox={`0 0 ${Math.max(dimensions.width, 2560)} ${Math.max(dimensions.height, 1440)}`}
      >
        <defs>
          {/* Filtre glow subtil */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Filtre glow fort pour pulsants */}
          <filter id="glow-strong" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient pour hexagones pulsants - variation d'intensité teal */}
          <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a8a7f" stopOpacity="1" />
            <stop offset="50%" stopColor="#4fd1c5" stopOpacity="1" />
            <stop offset="100%" stopColor="#2a8a7f" stopOpacity="1" />
          </linearGradient>

          {/* Gradient teal/gold pour borders des fenêtres */}
          <linearGradient id="window-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4fd1c5" stopOpacity="1" />
            <stop offset="50%" stopColor="#edc800" stopOpacity="1" />
            <stop offset="100%" stopColor="#4fd1c5" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Connexions entre hexagones */}
        {connections.map((conn, i) => (
          <line
            key={`conn-${i}`}
            x1={conn.from.x}
            y1={conn.from.y}
            x2={conn.to.x}
            y2={conn.to.y}
            stroke="rgba(79, 209, 197, 0.15)"
            strokeWidth="1"
            strokeDasharray="5,5"
            filter="url(#glow)"
          >
            <animate
              attributeName="opacity"
              values="0.1;0.3;0.1"
              dur="8s"
              begin={`${conn.delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="10"
              dur="2s"
              repeatCount="indefinite"
            />
          </line>
        ))}

        {/* Hexagones de base avec mouvement subtil */}
        {hexagons.map((hex, i) => (
          <polygon
            key={`hex-${i}`}
            points={hexPoints(hex.x, hex.y, hex.size)}
            fill="none"
            stroke="rgba(79, 209, 197, 0.12)"
            strokeWidth="1"
            opacity={hex.opacity}
            filter="url(#glow)"
            transform={`rotate(${hex.rotation} ${hex.x} ${hex.y})`}
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values={`0,0; ${hex.dx},${hex.dy}; 0,0`}
              dur={`${hex.duration}s`}
              begin={`${hex.delay}s`}
              repeatCount="indefinite"
              additive="sum"
            />
            <animate
              attributeName="opacity"
              values={`${hex.opacity};${hex.opacity * 1.3};${hex.opacity}`}
              dur={`${hex.duration}s`}
              begin={`${hex.delay}s`}
              repeatCount="indefinite"
            />
          </polygon>
        ))}

        {/* Hexagones pulsants */}
        {pulsingHexagons.map((hex, i) => (
          <polygon
            key={`pulse-${i}`}
            points={hexPoints(hex.x, hex.y, hex.size)}
            fill="none"
            stroke="url(#pulse-gradient)"
            strokeWidth="1.5"
            filter="url(#glow-strong)"
            transform={`rotate(${hex.rotation} ${hex.x} ${hex.y})`}
          >
            <animate
              attributeName="opacity"
              values="0.1;0.85;0.1"
              dur={`${hex.duration}s`}
              begin={`${hex.delay}s`}
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              values={`${hex.rotation} ${hex.x} ${hex.y}; ${hex.rotation + 3} ${hex.x} ${hex.y}; ${hex.rotation} ${hex.x} ${hex.y}`}
              dur={`${hex.duration * 2}s`}
              begin={`${hex.delay}s`}
              repeatCount="indefinite"
            />
          </polygon>
        ))}
      </svg>
    </div>
  );
}
