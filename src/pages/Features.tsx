
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Calendar, 
  Bell, 
  BarChart3, 
  Smartphone, 
  Shield,
  Zap,
  Users,
  CreditCard,
  Mail,
  Clock,
  Settings
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Sparkles } from '@/components/aceternity/sparkles';
import { BackgroundBeams } from '@/components/aceternity/background-beams';
import { TextGenerateEffect } from '@/components/aceternity/text-generate-effect';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

const Features = () => {
  const mainFeatures = [
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: 'Professional Website Builder',
      description: 'Create stunning, responsive websites with our intuitive drag-and-drop builder.',
      size: 'md' as const,
      features: [
        'Drag & drop interface',
        'Mobile-responsive templates',
        'SEO optimization',
        'Custom domains',
        'SSL certificates included'
      ]
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: 'Advanced Scheduling System',
      description: 'Powerful appointment booking with real-time availability and automated workflows.',
      size: 'md' as const,
      features: [
        'Real-time availability',
        'Multiple service types',
        'Recurring appointments',
        'Buffer time management',
        'Booking confirmations'
      ]
    }
  ];

  const allFeatures = [
    { icon: <Zap className="w-5 h-5 text-white" />, title: 'Fast Loading', description: 'Optimized for speed with CDN and caching', size: 'md' as const },
    { icon: <Settings className="w-5 h-5 text-white" />, title: 'Customizable', description: 'Full control over design and functionality', size: 'md' as const },
    { icon: <Shield className="w-5 h-5 text-white" />, title: 'SEO Ready', description: 'Built-in SEO tools and optimization', size: 'md' as const },
    { icon: <Clock className="w-5 h-5 text-white" />, title: 'Time Zone Support', description: 'Automatic time zone detection and conversion', size: 'md' as const },
    // { icon: <Users className="w-5 h-5 text-white" />, title: 'Multi-Staff', description: 'Manage multiple staff members and their schedules', size: 'lg' as const },
    { icon: <Bell className="w-5 h-5 text-white" />, title: 'Automated Reminders', description: 'SMS and email reminders to reduce no-shows', size: 'lg' as const },
    { icon: <CreditCard className="w-5 h-5 text-white" />, title: 'Payment Processing', description: 'Accept payments online with multiple gateway options', size: 'lg' as const },
   // { icon: <Mail className="w-5 h-5 text-white" />, title: 'Email Marketing', description: 'Built-in email campaigns and customer communication', size: 'md' as const },
    { icon: <Smartphone className="w-5 h-5 text-white" />, title: 'Mobile App', description: 'Manage your business on the go with our mobile app', size: 'md' as const },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="absolute inset-0 ">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-neutral-950 relative overflow-hidden">
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
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
              Powerful Features for
              <span className="text-gradient"> Modern Businesses</span>
            </h1>
            <div className="text-lg sm:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed px-4">
              
                <p>Everything you need to build, manage, and grow your business online. From website creation to advanced appointment scheduling.</p>
               
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Features Bento Grid */}
      {/* <section className="py-12 sm:py-16 lg:py-20  bg-neutral-950 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Core <span className='text-gradient'>Features</span></h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
              The essential tools that power your business operations
            </p>
          </motion.div>

          <BentoGrid className="  mb-16 ">
            {mainFeatures.map((feature, index) => (
              <BentoGridItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                size={feature.size}
              >
                <ul className="mt-4 space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full mr-2"></div>
                      <span className="text-slate-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </BentoGridItem>
            ))}
          </BentoGrid>
        </div>
      </section> */}

      {/* All Features Bento Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-neutral-950 relative">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Our <span className='text-gradient'>Features</span></h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
              Explore all the tools and capabilities that make GeniePal the perfect choice for your business
            </p>
          </motion.div>

          <BentoGrid className="max-w-7xl mx-auto">
            {allFeatures.map((feature, index) => (
              <BentoGridItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                size={feature.size}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-neutral-950 relative">
        <div className="absolute inset-0">
          {/* <Sparkles
            id="cta-sparkles"
            background="transparent"
            minSize={0.3}
            maxSize={1}
            particleDensity={400}
            className="w-full h-full"
            particleColor="#a470f1"
          /> */}
          <BackgroundBeams/>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to <span className='text-gradient'>Experience </span>These Features?
            </h2>
            <p className="text-lg sm:text-xl text-violet-100 mb-6 sm:mb-8 px-4">
              Start your free trial and see how GeniePal can transform your business
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-violet-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </motion.button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
