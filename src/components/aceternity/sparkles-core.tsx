
"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = (props: {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}) => {
  const {
    id,
    className,
    background = "transparent",
    minSize = 0.4,
    maxSize = 1.4,
    particleDensity = 1200,
    particleColor = "#8b5cf6",
  } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / particleDensity);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          opacity: Math.random(),
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      particles.length = 0;
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [maxSize, minSize, particleDensity, particleColor]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("h-full w-full", className)}
      style={{
        background,
      }}
    ></canvas>
  );
};
