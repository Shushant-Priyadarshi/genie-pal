
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Shield, Globe } from 'lucide-react';
import { BackgroundBeams } from '../aceternity/background-beams';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '300%',
      label: 'Avg Revenue Increase',
      description: 'Businesses see significant growth after implementing our platform'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Automated Booking',
      description: 'Never miss a potential customer with round-the-clock availability'
    },
    {
      icon: Shield,
      number: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Enterprise-grade reliability you can count on'
    },
    {
      icon: Globe,
      number: '50+',
      label: 'Countries Served',
      description: 'Trusted by businesses worldwide across all industries'
    }
  ];

  return (
    <section className="py-20 bg-neutral-950 relative overflow-hidden">
              <BackgroundBeams className="absolute inset-0"/>
      <div className="absolute inset-0">
        {/* <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="w-full h-full bg-violet-500/10 bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.1)_0%,transparent_50%)]"></div>
        </div> */}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Proven
            <span className="text-gradient"> Results</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Join thousands of successful businesses who have transformed their operations with GeniePal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="glass-card rounded-2xl p-8 hover-lift border border-slate-700/50 hover:border-violet-500/30 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:animate-glow">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {stat.label}
                </h3>
{/*                 
                <p className="text-slate-400 text-sm leading-relaxed">
                  {stat.description}
                </p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
