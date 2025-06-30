
"use client";
import React from "react";
import { SparklesCore } from "./sparkles-core";

export const Sparkles = ({
  id,
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
}: {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}) => {
  return (
    <SparklesCore
      id={id}
      background={background}
      minSize={minSize}
      maxSize={maxSize}
      particleDensity={particleDensity}
      className={className}
      particleColor={particleColor}
    />
  );
};
