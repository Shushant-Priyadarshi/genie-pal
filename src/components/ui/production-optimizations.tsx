
import React from 'react';

// Production-ready utility classes and optimizations
export const ProductionOptimizations = () => {
  return (
    <style>{`
      /* Performance optimizations */
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      /* Smooth scrolling */
      html {
        scroll-behavior: smooth;
      }
      
      /* Reduce motion for accessibility */
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(15, 23, 42, 0.5);
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, rgb(139, 92, 246), rgb(168, 85, 247));
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, rgb(124, 58, 237), rgb(147, 51, 234));
      }
      
      /* Focus styles for accessibility */
      *:focus-visible {
        outline: 2px solid rgb(139, 92, 246);
        outline-offset: 2px;
      }
      
      /* Glass effect utilities */
      .glass-card {
        background: rgba(15, 23, 42, 0.4);
        backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .text-gradient {
        background: linear-gradient(135deg, rgb(139, 92, 246) 0%, rgb(168, 85, 247) 50%, rgb(59, 130, 246) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .hover-lift {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .hover-lift:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
      }

      /* Container responsive padding */
      .container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;
      }

      @media (min-width: 640px) {
        .container {
          max-width: 640px;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
      }

      @media (min-width: 768px) {
        .container {
          max-width: 768px;
        }
      }

      @media (min-width: 1024px) {
        .container {
          max-width: 1024px;
          padding-left: 2rem;
          padding-right: 2rem;
        }
      }

      @media (min-width: 1280px) {
        .container {
          max-width: 1280px;
        }
      }

      @media (min-width: 1536px) {
        .container {
          max-width: 1536px;
        }
      }
    `}</style>
  );
};
