
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Heart, 
  Award, 
  Users, 
  TrendingUp, 
  Globe,
  Clock,
  Shield
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Sparkles } from '@/components/aceternity/sparkles';
import { BackgroundBeams } from '@/components/aceternity/background-beams';
import { TextGenerateEffect } from '@/components/aceternity/text-generate-effect';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

const About = () => {
  const stats = [
    { icon: Users, number: '10,000+', label: 'Businesses Served',     size: "lg", },
    { icon: Globe, number: '50+', label: 'Countries' ,     size: "md",},
    { icon: Clock, number: '99.9%', label: 'Uptime',     size: "md", },
    { icon: Award, number: '4.9/5', label: 'Customer Rating',     size: "lg", },
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      size:"md",
      description: 'We constantly push boundaries to create cutting-edge solutions that help businesses thrive in the digital age.',
    },
    {
      icon: Heart,
          size:"lg",
      title: 'Customer Success',
      description: 'Your success is our mission. We\'re committed to providing exceptional service and support every step of the way.',
    },
    {
      icon: Shield,
          size:"lg",
      title: 'Reliability',
      description: 'Built with enterprise-grade security and reliability, ensuring your business operations run smoothly 24/7.',
    },
    {
      icon: TrendingUp,
          size:"md",
      title: 'Growth',
      description: 'We help businesses scale efficiently with tools and insights that drive meaningful growth and success.',
    },
  ];

  const team = [
    // {
    //   name: 'Sarah Williams',
    //   role: 'CEO & Founder',
    //   image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    //   bio: 'Former Silicon Valley executive with 15+ years in tech, passionate about empowering small businesses.',
    // },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Tech innovator and full-stack developer who believes in building scalable, user-friendly solutions.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      bio: 'Award-winning UX designer focused on creating beautiful, intuitive experiences for businesses.',
    },
    {
      name: 'David Park',
      role: 'Head of Customer Success',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Customer advocate with a passion for helping businesses achieve their goals through technology.',
    },
  ];

  return (
    <Layout>
            <div className="absolute inset-0">
                <Sparkles
                  id="features-hero-sparkles"
                  background="transparent"
                  minSize={0.4}
                  maxSize={1.4}
                  particleDensity={1000}
                  className="w-full h-full"
                  particleColor="#8b5cf6"
                />
              </div>
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <Sparkles
            id="about-hero-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1.4}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#8b5cf6"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
              We're Building the
              <span className="text-gradient"> Future of Business</span>
            </h1>
            <div className="text-lg sm:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed px-4">
              <p>GeniePal was born from a simple belief: every business deserves a professional online presence and the tools to succeed in the digital world. We're here to make that happen.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="py-12 sm:py-16 bg-neutral-950 relative">
        
        <div className="container mx-auto px-4">
          <BentoGrid className="max-w-6xl mx-auto relative">
 
            {stats.map((stat, index) => (
              
              <BentoGridItem
                key={index}
                size={stat.size}
                icon={<stat.icon className="w-6 h-6 text-white" />}
                title={stat.number}
                description={stat.label}
              />
              
            ))}
            
          </BentoGrid>
        </div>
      </section>

      {/* Values Bento Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-neutral-950 relative">
        <BackgroundBeams className='inset-0 absolute'/>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Our Core <span className='text-gradient'> Values</span></h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
              These principles guide everything we do and shape the way we serve our customers
            </p>
          </motion.div>

          <BentoGrid className="max-w-7xl mx-auto relative">
             <BackgroundBeams />
            {values.map((value, index) => (
              <BentoGridItem
                key={index}
                size={value.size} 
                icon={<value.icon className="w-6 h-6 text-white" />}
                title={value.title}
                description={value.description}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Team Bento Grid */}
      {/* <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-950 to-slate-900 relative">
        <div className="absolute inset-0">
          <Sparkles
            id="team-sparkles"
            background="transparent"
            minSize={0.8}
            maxSize={1.0}
            particleDensity={800}
            className="w-full h-full"
            particleColor="#ec4899"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Meet Our Team</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
              The passionate people behind GeniePal who are dedicated to your success
            </p>
          </motion.div>

          <BentoGrid className="max-w-6xl mx-auto ">
            {team.map((member, index) => (
              <BentoGridItem
                key={index}
                size="md"
                header={
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover "
                  />
                }
                title={member.name}
                description={member.role}
              >
                <p className="text-xs sm:text-sm text-slate-400 mt-2">{member.bio}</p>
              </BentoGridItem>
            ))}
          </BentoGrid>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative bg-neutral-950">
        <BackgroundBeams />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Join Our<span className='text-gradient'> Success Story?</span>
            </h2>
            <p className="text-lg sm:text-xl text-violet-100 mb-6 sm:mb-8 px-4">
              Let's build something amazing together. Start your journey with GeniePal today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" rounded-md bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-lg px-8 py-4 border-0 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105"
            >
              Start Your Free Trial
            </motion.button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
