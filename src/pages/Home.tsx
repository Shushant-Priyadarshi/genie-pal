
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ProcessSection from '@/components/home/ProcessSection';
import StatsSection from '@/components/home/StatsSection';
import CtaSection from '@/components/home/CtaSection';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { Globe, Calendar, BarChart3, Zap, Users, Shield } from 'lucide-react';
import { BackgroundBeams } from '@/components/aceternity/background-beams';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bentoItems = [
    {
      title: "Website Builder",
      description: "Create stunning websites with our drag-and-drop builder",
      icon: <Globe className="w-6 h-6 text-white" />,
      size: "lg" as const
    },
    {
      title: "Smart Scheduling",
      description: "Advanced appointment booking system",
      icon: <Calendar className="w-6 h-6 text-white" />,
      size: "md" as const
    },
    {
      title: "Analytics",
      description: "Track your business performance",
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      size: "md" as const
    },
    {
      title: "Lightning Fast",
      description: "Optimized for speed and performance",
      icon: <Zap className="w-6 h-6 text-white" />,
      size: "md" as const
    },
    {
      title: "Team Management",
      description: "Collaborate with your team seamlessly",
      icon: <Users className="w-6 h-6 text-white" />,
      size: "md" as const
    },
    // {
    //   title: "Enterprise Security",
    //   description: "Bank-level security for your data",
    //   icon: <Shield className="w-6 h-6 text-white" />,
    //   size: "full" as const
    // }
    
  ];

  return (
    <Layout>
      <HeroSection />
      
      {/* Bento Grid Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-neutral-950 ">
       
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 ">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 relative">
              Everything You Need in <span className='text-gradient'>One Platform</span>
             
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover the powerful features that make GeniePal the perfect choice for your business
            </p>
             
          </div>
          
          <BentoGrid className="max-w-7xl mx-auto relative">
                   <BackgroundBeams/>
            {bentoItems.map((item, index) => (
              <BentoGridItem
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                size={item.size}
              />
            ))}     
          </BentoGrid>
        </div>
      </section>
      
      <FeaturesSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Home;
