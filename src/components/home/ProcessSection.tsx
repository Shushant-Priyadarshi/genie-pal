
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Rocket, Settings, Users } from 'lucide-react';
import { BackgroundBeams } from '../aceternity/background-beams';

const ProcessSection = () => {
  const steps = [
    {
      icon: Settings,
      title: 'Choose Your Template',
      description: 'Select from our collection of stunning, industry-specific templates designed for maximum conversion.',
      step: '01'
    },
    {
      icon: Users,
      title: 'Customize & Brand',
      description: 'Personalize your website with your brand colors, content, and images using our intuitive editor.',
      step: '02'
    },
    {
      icon: CheckCircle,
      title: 'Setup Appointments',
      description: 'Configure your services, availability, and booking preferences with our smart scheduling system.',
      step: '03'
    },
    {
      icon: Rocket,
      title: 'Launch & Grow',
      description: 'Go live with your professional website and start accepting bookings from day one.',
      step: '04'
    }
  ];

  return (
    <section className="py-20 bg-neutral-950 relative overflow-hidden">
      <BackgroundBeams className="absolute inset-0"/>
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div> */}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            How It
            <span className="text-gradient"> Works</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Get your business online in minutes, not months. Our streamlined process makes it easy to create a professional presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass-card rounded-2xl p-8 text-center hover-lift relative border border-slate-700/50 hover:border-violet-500/30 transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
                
                <div className="mb-6 mt-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:animate-glow">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-violet-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
