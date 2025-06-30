
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { BackgroundBeams } from '../aceternity/background-beams';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Pediatrician',
      business: 'Johnson Family Practice',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      text: 'GeniePal transformed our practice! Patient scheduling is now seamless, and our website looks incredibly professional. Bookings increased by 40% in just 2 months.',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Salon Owner',
      business: 'Luxe Beauty Salon',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      text: 'The appointment system is a game-changer. My clients love the convenience of booking online, and I love the automated reminders that reduce no-shows by 60%.',
    },
    {
      name: 'James Chen',
      role: 'Business Consultant',
      business: 'Chen Consulting Group',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      text: 'Professional, reliable, and incredibly easy to use. The analytics dashboard helps me track my business growth, and the mobile app keeps me connected anywhere.',
    },
    {
      name: 'Emily Davis',
      role: 'Therapist',
      business: 'Mindful Wellness Center',
      image: 'https://images.unsplash.com/photo-1594824904103-8cc50e7e2d2d?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      text: 'The secure booking system gives my clients confidence, and the automated workflows save me hours each week. Best investment for my practice!',
    },
    {
      name: 'Michael Torres',
      role: 'Fitness Trainer',
      business: 'Elite Fitness Studio',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      text: 'My training sessions are always booked thanks to the easy online scheduling. The website showcases my services perfectly and attracts new clients daily.',
    },
    {
      name: 'Lisa Thompson',
      role: 'Nutritionist',
      business: 'Healthy Living Nutrition',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      text: 'GeniePal made it so easy to go digital. My clients appreciate the convenience, and I love how everything is integrated in one beautiful platform.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-neutral-950 relative">
              <BackgroundBeams className="absolute inset-0"/>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Loved by
            <span className="text-gradient">
              {" "}Thousands of Businesses
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            See how businesses like yours are thriving with GeniePal's powerful platform
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card rounded-2xl p-8 hover-lift relative border border-slate-700/50 hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center animate-glow">
                <Quote className="w-4 h-4 text-white" />
              </div>

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-violet-500/30"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-white text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  <p className="text-violet-400 text-sm font-medium">
                    {testimonial.business}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">4.9/5</div>
              <div className="text-slate-400 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">10K+</div>
              <div className="text-slate-400 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">99.9%</div>
              <div className="text-slate-400 text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-slate-400 text-sm">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
