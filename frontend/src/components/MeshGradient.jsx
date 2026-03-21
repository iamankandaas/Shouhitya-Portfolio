import React, { useRef, useEffect } from 'react';

const MeshGradient = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const ripples = [];
    const maxRipples = 10;
    let mouseX = -500;
    let mouseY = -500;
    let frameCount = 0;

    const blobs = [
      { x: 0.2, y: 0.3, vx: 0.0003, vy: 0.0004, r: 0.4, color: [22, 78, 72] },
      { x: 0.8, y: 0.2, vx: -0.0005, vy: 0.0003, r: 0.35, color: [18, 65, 85] },
      { x: 0.5, y: 0.7, vx: 0.0004, vy: -0.0003, r: 0.45, color: [15, 70, 55] },
      { x: 0.3, y: 0.8, vx: -0.0003, vy: -0.0005, r: 0.3, color: [25, 82, 78] },
      { x: 0.7, y: 0.5, vx: 0.0002, vy: 0.0006, r: 0.38, color: [20, 60, 68] },
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const spawnRipple = (x, y) => {
      const seed = Math.random() * 1000;
      const lobes = 5 + Math.floor(Math.random() * 3);
      const wobbleAmp = 0.05 + Math.random() * 0.07;
      const phaseOffset = Math.random() * Math.PI * 2;
      ripples.push({
        x, y, seed, lobes, wobbleAmp, phaseOffset,
        radius: 12,
        maxRadius: 320 + Math.random() * 140,
        speed: 0.08 + Math.random() * 0.06,
        opacity: 0.28 + Math.random() * 0.12,
      });
      if (ripples.length > maxRipples) ripples.shift();
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onClick = (e) => {
      for (let i = 0; i < 3; i++) {
        const ox = (Math.random() - 0.5) * 24;
        const oy = (Math.random() - 0.5) * 24;
        ripples.push({
          x: e.clientX + ox, y: e.clientY + oy,
          seed: Math.random() * 1000,
          lobes: 5 + Math.floor(Math.random() * 4),
          wobbleAmp: 0.06 + Math.random() * 0.08,
          phaseOffset: Math.random() * Math.PI * 2,
          radius: 14,
          maxRadius: 420 + Math.random() * 160,
          speed: 0.12 + Math.random() * 0.10,
          opacity: 0.35 + Math.random() * 0.12,
        });
      }
      while (ripples.length > maxRipples + 5) ripples.shift();
    };

    // 20 control points for silkier curves
    const getWobblyPoints = (cx, cy, baseRadius, rip, t) => {
      const n = 20;
      const points = [];
      for (let i = 0; i < n; i++) {
        const angle = (i / n) * Math.PI * 2;
        const d1 = Math.sin(angle * rip.lobes + rip.phaseOffset + t * 0.35) * rip.wobbleAmp;
        const d2 = Math.sin(angle * (rip.lobes - 1) + rip.seed + t * 0.25) * rip.wobbleAmp * 0.35;
        const d3 = Math.cos(angle * (rip.lobes + 1) * 0.5 + rip.seed * 0.3 + t * 0.15) * rip.wobbleAmp * 0.15;
        const r = baseRadius * (1 + d1 + d2 + d3);
        points.push({
          x: cx + Math.cos(angle) * r,
          y: cy + Math.sin(angle) * r,
        });
      }
      return points;
    };

    const drawSmoothCurve = (points) => {
      const n = points.length;
      if (n < 3) return;
      ctx.beginPath();
      ctx.moveTo(
        (points[n - 1].x + points[0].x) / 2,
        (points[n - 1].y + points[0].y) / 2
      );
      for (let i = 0; i < n; i++) {
        const curr = points[i];
        const next = points[(i + 1) % n];
        ctx.quadraticCurveTo(curr.x, curr.y, (curr.x + next.x) / 2, (curr.y + next.y) / 2);
      }
      ctx.closePath();
    };

    const animate = () => {
      time += 0.016;
      frameCount++;
      const w = canvas.width;
      const h = canvas.height;

      if (mouseX > 0 && frameCount % 35 === 0) {
        spawnRipple(mouseX, mouseY);
      }

      ctx.fillStyle = '#0a1214';
      ctx.fillRect(0, 0, w, h);

      // Ambient blobs
      for (const blob of blobs) {
        blob.x += Math.sin(time * blob.vx * 600 + blob.y * 5) * 0.001;
        blob.y += Math.cos(time * blob.vy * 600 + blob.x * 5) * 0.001;
        blob.x = Math.max(0.05, Math.min(0.95, blob.x));
        blob.y = Math.max(0.05, Math.min(0.95, blob.y));

        const cx = blob.x * w;
        const cy = blob.y * h;
        const radius = blob.r * Math.max(w, h);
        const [r, g, b] = blob.color;
        const pulse = 0.5 + 0.15 * Math.sin(time * 0.5 + blob.x * 3);

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${pulse})`);
        grad.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${pulse * 0.4})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      // Premium ripples
      const alive = [];
      for (const rip of ripples) {
        rip.radius += rip.speed;
        const life = 1 - rip.radius / rip.maxRadius;
        if (life <= 0) continue;
        alive.push(rip);

        const alpha = rip.opacity * life * life;
        const pts = getWobblyPoints(rip.x, rip.y, rip.radius, rip, time);

        // Layer 1: Outer glow — wide, soft
        drawSmoothCurve(pts);
        ctx.strokeStyle = `rgba(120, 200, 190, ${alpha * 0.18})`;
        ctx.lineWidth = Math.max(1.5, 12 * life);
        ctx.stroke();

        // Layer 2: Mid glow — warm accent
        drawSmoothCurve(pts);
        ctx.strokeStyle = `rgba(150, 215, 205, ${alpha * 0.35})`;
        ctx.lineWidth = Math.max(0.8, 5 * life);
        ctx.stroke();

        // Layer 3: Core line — bright, thin, crisp
        drawSmoothCurve(pts);
        ctx.strokeStyle = `rgba(210, 245, 240, ${alpha * 0.75})`;
        ctx.lineWidth = Math.max(0.4, 1.8 * life);
        ctx.stroke();

        // Layer 4: Inner fill — faint radial glow inside the shape
        if (rip.radius > 20) {
          const fillGrad = ctx.createRadialGradient(rip.x, rip.y, 0, rip.x, rip.y, rip.radius * 0.85);
          fillGrad.addColorStop(0, `rgba(160, 220, 215, ${alpha * 0.06})`);
          fillGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          drawSmoothCurve(pts);
          ctx.fillStyle = fillGrad;
          ctx.fill();
        }
      }
      ripples.length = 0;
      ripples.push(...alive);

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="mesh-gradient-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default MeshGradient;
