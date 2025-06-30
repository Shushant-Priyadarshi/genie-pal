
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sparkles } from '@/components/aceternity/sparkles';

const CtaSection = () => {
  const benefits = [
    'No setup fees or hidden costs',
    '30-day money-back guarantee',
    'Free migration from existing platform',
    '24/7 premium support included'
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <Sparkles 
        id="cta-sparkles"
        background="transparent"
        minSize={0.6}
        maxSize={1.2}
        particleDensity={100}
        className="absolute inset-0 w-full h-full"
        particleColor="#ec4899"
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-950/20 to-slate-950"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-slate-300">Join 10,000+ satisfied customers</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Ready to
              <span className="text-gradient"> Transform</span>
              <br />Your Business?
            </h2>
            
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Start your journey to success today. Build your dream website and start accepting appointments in minutes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-lg px-8 py-4 border-0 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <div className="text-sm text-slate-400">
              No credit card required • Get started in 60 seconds
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
