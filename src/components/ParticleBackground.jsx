import React, { useEffect, useRef } from 'react';

const ParticleBackground = ({ theme = 'space' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = { x: null, y: null, radius: 150 };
    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

    // DATA SCIENCE CLUSTERS / SCATTER PLOT VIBE
    // More particles, slower, no lines between them (except near mouse maybe)
    const particleCount = Math.floor(window.innerWidth / 8); 
    const particles = [];
    const colors = ['#10b981', '#14b8a6', '#06b6d4', '#f59e0b', '#f43f5e'];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2.5 + 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.7 + 0.1;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.01 + 0.002;
        this.radius = Math.random() * 20 + 5;
      }

      update() {
        // Small orbital drift around base point (like data jitter)
        this.angle += this.speed;
        this.x = this.baseX + Math.cos(this.angle) * this.radius;
        this.y = this.baseY + Math.sin(this.angle) * this.radius;

        // Mouse interaction (Data point probing)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            // Particles get bigger and brighter when probed
            this.size = (Math.random() * 2.5 + 0.5) + (force * 3);
            this.alpha = Math.min(1, this.alpha + force * 0.5);
          } else {
            this.size = Math.max(0.5, this.size - 0.1);
          }
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    const connectToMouse = () => {
      if (mouse.x === null || mouse.y === null) return;
      for (let a = 0; a < particles.length; a++) {
        const dx = particles[a].x - mouse.x;
        const dy = particles[a].y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const opacity = (1 - distance / mouse.radius) * 0.2;
          ctx.save();
          ctx.beginPath();
          ctx.strokeStyle = '#14b8a6';
          ctx.globalAlpha = opacity;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => { p.update(); p.draw(); });
      connectToMouse();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', () => {});
      window.removeEventListener('mouseleave', () => {});
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-80" />;
};
export default ParticleBackground;
