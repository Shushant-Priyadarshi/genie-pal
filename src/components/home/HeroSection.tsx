
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Calendar, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TextGenerateEffect } from '@/components/aceternity/text-generate-effect';
import { Sparkles } from '@/components/aceternity/sparkles';
import { BackgroundBeams } from '../aceternity/background-beams';


const HeroSection = () => {
  const stats = [
    { number: '10K+', label: 'Businesses Served', icon: Users },
    { number: '50K+', label: 'Appointments Booked', icon: Calendar },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Zap },
  ];

  return (
    <section className=" min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      <BackgroundBeams/>
      {/* Sparkles Background */}
      {/* <Sparkles 
        id="hero-sparkles"
        background="transparent"
        minSize={0.3}
        maxSize={1}
        particleDensity={100}
        className="absolute inset-0 w-full h-full"
        particleColor="#8b5cf6"
      /> */}
              

      {/* Dark Background with Subtle Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6"
            >
              <Star className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-slate-300">Trusted by 10,000+ businesses</span>
            </motion.div>

            <div className="mb-6">
              <TextGenerateEffect 
                words="Build Your Dream Business Website"

              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-400 mb-8 max-w-2xl"
            >
              Transform your business with stunning websites and integrated appointment scheduling. 
              Perfect for doctors, salons, consultants, and service providers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-lg px-8 py-3 border-0 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-slate-900/50 border-slate-700 hover:border-violet-500/50 hover:bg-slate-800/50 text-slate-300 hover:text-white">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-5 h-5 text-violet-400 mr-2" />
                    <span className="text-2xl font-bold text-white">{stat.number}</span>
                  </div>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative md:mb-0 mb-10"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Device Mockup */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card rounded-3xl p-8"
              >
                <div className="bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-lg font-semibold mb-2">Appointment Dashboard</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white/20 rounded-lg p-3">
                      <span className="text-sm">Dr. Smith - Consultation</span>
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div className="flex items-center justify-between bg-white/20 rounded-lg p-3">
                      <span className="text-sm">Hair Styling - 2:00 PM</span>
                      <Calendar className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-slate-700 rounded-full w-full"></div>
                  <div className="h-3 bg-slate-700 rounded-full w-3/4"></div>
                  <div className="h-3 bg-slate-700 rounded-full w-1/2"></div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full flex items-center justify-center animate-glow"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-2xl flex items-center justify-center"
              >
                <Users className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
