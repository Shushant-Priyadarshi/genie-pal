
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoGridItemProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BentoGrid: React.FC<BentoGridProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[250px]",
      className
    )}>
      {children}
    </div>
  );
};

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  children,
  className,
  title,
  description,
  header,
  icon,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'md:col-span-1 lg:col-span-1 xl:col-span-1',
    md: 'md:col-span-1 lg:col-span-2 xl:col-span-2',
    lg: 'md:col-span-2 lg:col-span-2 xl:col-span-4',
    xl: 'md:col-span-3 lg:col-span-4 xl:col-span-4',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "group/bento relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 shadow-2xl shadow-violet-500/5 hover:shadow-violet-500/10 transition-all duration-500",
        sizeClasses[size],
        className
      )}
    >
      {header && (
        <div className="flex items-center justify-center w-full h-full mb-4 overflow-hidden rounded-xl">
          {header}
        </div>
      )}
      
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon && (
          <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600">
            {icon}
          </div>
        )}
        
        {title && (
          <div className="font-bold text-white mb-2 text-lg sm:text-xl">
            {title}
          </div>
        )}
        
        {description && (
          <div className="text-slate-300 text-sm sm:text-base mb-4 leading-relaxed">
            {description}
          </div>
        )}
        
        {children && (
          <div className="text-slate-300">
            {children}
          </div>
        )}
      </div>
    </motion.div>
  );
};
