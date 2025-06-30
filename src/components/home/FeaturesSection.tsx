
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Globe, 
  Smartphone, 
  Bell, 
  BarChart3, 
  Shield,
  Clock,
  Users
} from 'lucide-react';
import { BackgroundBeams } from '@/components/aceternity/background-beams';

const FeaturesSection = () => {
  const features = [
    {
      icon: Globe,
      title: 'Modern Website Builder',
      description: 'Create stunning, responsive websites with our drag-and-drop builder. No coding required.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Calendar,
      title: 'Integrated Scheduling',
      description: 'Seamless appointment booking system with real-time availability and automatic confirmations.',
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Automated reminders and notifications keep your clients informed and reduce no-shows.',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Your website and booking system work perfectly on all devices and screen sizes.',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track bookings, revenue, and customer insights with comprehensive analytics.',
      color: 'from-orange-500 to-amber-600',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee and data protection.',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Accept bookings round the clock with automated scheduling and payment processing.',
      color: 'from-indigo-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Multi-User Support',
      description: 'Manage multiple staff members, services, and locations from one central dashboard.',
      color: 'from-teal-500 to-cyan-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 relative overflow-hidden bg-neutral-950">
              <BackgroundBeams className="absolute inset-0"/>
      <div className="absolute inset-0 "></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 ">
            Everything You Need to
                  
            <span className="text-gradient">
              {" "}Succeed Online
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Our comprehensive platform combines website building with advanced appointment scheduling, 
            giving you all the tools to grow your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card rounded-2xl p-8 hover-lift relative group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:animate-glow`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glass-card relative rounded-3xl p-12 text-white border border-violet-500/20">
                  <BackgroundBeams className="absolute inset-0"/>
            <h3 className="text-3xl font-bold mb-6 text-gradient">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 text-slate-300">
              Join thousands of successful businesses using GeniePal
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50"
            >
              Start Your Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
