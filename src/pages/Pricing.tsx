import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Sparkles } from '@/components/aceternity/sparkles';
import { BackgroundBeams } from '@/components/aceternity/background-beams';
import { TextGenerateEffect } from '@/components/aceternity/text-generate-effect';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for new businesses getting started',
      monthlyPrice: 29,
      annualPrice: 290,
      popular: false,
      features: [
        'Professional website builder',
        'Basic appointment scheduling',
        'Up to 100 bookings/month',
        'Email notifications',
        'Mobile responsive design',
        'Basic analytics',
        'SSL certificate',
        '24/7 support'
      ],
      limitations: [
        'Limited to 1 staff member',
        'Basic customization',
        'Standard templates'
      ]
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 79,
      annualPrice: 790,
      popular: true,
      features: [
        'Everything in Starter',
        'Advanced scheduling system',
        'Up to 500 bookings/month',
        'SMS notifications',
        'Multi-staff management',
        'Advanced analytics',
        'Custom branding',
        'Payment processing',
        'Calendar integrations',
        'Customer management',
        'Automated reminders',
        'Priority support'
      ],
      limitations: []
    },
    {
      name: 'Enterprise',
      description: 'For established businesses with complex needs',
      monthlyPrice: 199,
      annualPrice: 1990,
      popular: false,
      features: [
        'Everything in Professional',
        'Unlimited bookings',
        'Multi-location support',
        'Advanced reporting',
        'API access',
        'Custom integrations',
        'White-label solution',
        'Advanced security',
        'Dedicated account manager',
        'Custom training',
        'SLA guarantee',
        '24/7 phone support'
      ],
      limitations: []
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate the billing accordingly.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time. Your service will continue until the end of your current billing period.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all new subscriptions. If you\'re not satisfied, we\'ll refund your payment.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no setup fees or hidden costs. The price you see is what you pay.'
    }
  ];

  const addOns = [
    {
      name: 'Advanced Analytics',
      price: 19,
      description: 'Detailed business insights and reporting'
    },
    {
      name: 'SMS Credits',
      price: 0.05,
      description: 'Per SMS sent (bulk pricing available)'
    },
    {
      name: 'Custom Domain',
      price: 15,
      description: 'Use your own domain name'
    },
    {
      name: 'Priority Support',
      price: 49,
      description: 'Get faster response times and phone support'
    }
  ];

  return (
    <Layout>
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
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-neutral relative overflow-hidden">
        
        <div className="absolute inset-0">
          <Sparkles
            id="pricing-hero-sparkles"
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
              Simple, Transparent
              <span className="text-gradient"> Pricing</span>
            </h1>
            <div className="text-lg sm:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed px-4">
              <p>Choose the perfect plan for your business. All plans include our core features with no hidden fees.</p>

            </div>
            
            {/* Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8 sm:mb-12">
              <span className={`text-base sm:text-lg ${!isAnnual ? 'text-white font-semibold' : 'text-slate-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-violet-600' : 'bg-slate-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-base sm:text-lg ${isAnnual ? 'text-white font-semibold' : 'text-slate-400'}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Save 20%
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12 sm:py-16 lg:py-20 bg-neutral-950 relative">
       
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative glass-card rounded-2xl p-6 sm:p-8 ${
                  plan.popular 
                    ? 'border-2 border-violet-500 scale-105 lg:scale-110' 
                    : 'border border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base">{plan.description}</p>
                  <div className="mb-4 sm:mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-gradient">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-slate-400 text-sm sm:text-base">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>
                  <Button 
                    className={`w-full text-sm sm:text-base ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700' 
                        : 'bg-slate-700 hover:bg-slate-600 text-white'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-semibold text-white text-sm sm:text-base">Features included:</h4>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, i) => (
                    <div key={i} className="flex items-start">
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-400 text-xs sm:text-sm">{limitation}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
            <BackgroundBeams/>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-neutral-950 relative">
        <div className="absolute inset-0">
         <BackgroundBeams/>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Optional <span className='text-gradient'>Add-ons</span></h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
              Enhance your plan with these optional features to customize your experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-4 sm:p-6 hover-lift"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{addon.name}</h3>
                <div className="text-xl sm:text-2xl font-bold text-gradient mb-2 sm:mb-3">
                  ${addon.price}
                  <span className="text-xs sm:text-sm text-slate-400 font-normal">
                    {addon.name === 'SMS Credits' ? ' per SMS' : '/month'}
                  </span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-neutral-950 relative">
        <BackgroundBeams/>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Frequently Asked Questions</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
              Got questions? We've got answers. Here are the most common questions about our pricing.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-xl p-4 sm:p-6"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">{faq.question}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      {/* <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-950/50 to-blue-950/50 relative">
        <BackgroundBeams className="absolute inset-0 opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Check className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              30-Day Money Back Guarantee
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed px-4">
              We're confident you'll love GeniePal. If you're not completely satisfied within 30 days, 
              we'll refund your money, no questions asked.
            </p>
            <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3">
              Start Your Free Trial
            </Button>
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-neutral-950 relative">
        <div className="absolute inset-0">
          <Sparkles
            id="pricing-cta-sparkles"
            background="transparent"
            minSize={0.3}
            maxSize={1}
            particleDensity={400}
            className="w-full h-full"
            particleColor="#75b7f4"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to <span className='text-gradient'>Get Started?</span>
            </h2>
            <p className="text-lg sm:text-xl text-violet-100 mb-6 sm:mb-8 px-4">
              Join thousands of businesses already using GeniePal to grow their online presence
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button className="bg-white text-violet-600 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-violet-600 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
