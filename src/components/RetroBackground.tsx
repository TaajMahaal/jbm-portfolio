import React, { useEffect, useRef } from 'react';

export default function RetroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Floating shell windows
    interface FloatingWindow {
      x: number;
      y: number;
      width: number;
      height: number;
      speedX: number;
      speedY: number;
      opacity: number;
      rotation: number;
      rotationSpeed: number;
    }

    const windows: FloatingWindow[] = [];
    const windowCount = 8;

    // Create floating windows
    for (let i = 0; i < windowCount; i++) {
      windows.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: 80 + Math.random() * 40,
        height: 50 + Math.random() * 30,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.15 + 0.05,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.001,
      });
    }

    const draw = () => {
      // Clear canvas with fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      windows.forEach((win) => {
        // Update position
        win.x += win.speedX;
        win.y += win.speedY;
        win.rotation += win.rotationSpeed;

        // Wrap around edges
        if (win.x < -win.width) win.x = canvas.width;
        if (win.x > canvas.width) win.x = -win.width;
        if (win.y < -win.height) win.y = canvas.height;
        if (win.y > canvas.height) win.y = -win.height;

        ctx.save();
        ctx.translate(win.x + win.width / 2, win.y + win.height / 2);
        ctx.rotate(win.rotation);
        ctx.translate(-win.width / 2, -win.height / 2);

        // Draw window with gradient border
        const gradient = ctx.createLinearGradient(0, 0, win.width, win.height);
        gradient.addColorStop(0, `rgba(26, 83, 92, ${win.opacity})`);
        gradient.addColorStop(0.5, `rgba(79, 209, 197, ${win.opacity})`);
        gradient.addColorStop(1, `rgba(237, 200, 0, ${win.opacity})`);

        // Window background
        ctx.fillStyle = `rgba(10, 10, 10, ${win.opacity * 0.6})`;
        ctx.fillRect(0, 0, win.width, win.height);

        // Window border
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.strokeRect(0, 0, win.width, win.height);

        // Title bar
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, win.width, 8);

        // Title bar dots (terminal-style)
        ctx.fillStyle = `rgba(79, 209, 197, ${win.opacity * 1.5})`;
        ctx.beginPath();
        ctx.arc(4, 4, 1.5, 0, Math.PI * 2);
        ctx.arc(10, 4, 1.5, 0, Math.PI * 2);
        ctx.arc(16, 4, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Terminal prompt line
        ctx.strokeStyle = `rgba(237, 200, 0, ${win.opacity * 0.8})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(4, 15);
        ctx.lineTo(win.width - 4, 15);
        ctx.stroke();

        ctx.restore();
      });
    };

    const interval = setInterval(draw, 40);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-40 z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
