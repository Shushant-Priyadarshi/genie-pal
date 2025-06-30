
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Globe,
  Users
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles } from '@/components/aceternity/sparkles';
import CtaSection from '@/components/home/CtaSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@geniepal.com',
      subtitle: 'We typically respond within 2 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri 9AM-6PM PST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Innovation Drive, San Francisco, CA 94107',
      subtitle: 'Schedule a meeting'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM PST',
      subtitle: 'Weekend support available'
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      action: 'Call Now',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      action: 'Send Email',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Globe,
      title: 'Help Center',
      description: 'Browse our documentation and guides',
      action: 'Visit Help Center',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const officeLocations = [
    {
      city: 'San Francisco',
      address: '123 Innovation Drive, San Francisco, CA 94107',
      phone: '+1 (555) 123-4567',
      email: 'sf@geniepal.com',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      city: 'New York',
      address: '456 Business Ave, New York, NY 10001',
      phone: '+1 (555) 987-6543',
      email: 'ny@geniepal.com',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop'
    },
    {
      city: 'London',
      address: '789 Tech Street, London EC1A 1BB, UK',
      phone: '+44 20 1234 5678',
      email: 'london@geniepal.com',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-neutral-950 ">
         <div className="absolute inset-0">
                  <Sparkles
                    id="pricing-hero-sparkles"
                    background="transparent"
                    minSize={0.4}
                    maxSize={1.2}
                    particleDensity={1200}
                    particleColor="#8b5cf6"
                  />
                </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in <span className='text-gradient'>Touch</span>

            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Have questions about GeniePal? Want to see a demo? We're here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl glass-card 0 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-300 mb-2">{info.title}</h3>
                <p className="text-slate-300 font-medium mb-1">{info.details}</p>
                <p className="text-slate-300 text-sm">{info.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-neutral-950 text-slate-300">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-slate-300 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300mb-2">
                      Company
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full"
                    placeholder="Tell us more about your needs..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-lg px-8 py-4 border-0 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 "
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </motion.div>

            {/* Support Options */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-300 mb-6">Other Ways to Reach Us</h2>
                <p className="text-lg mb-8">
                  Choose the support option that works best for you
                </p>
              </div>

              <div className="space-y-6">
                {supportOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start space-x-4 text-slate-300">
                      <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold  mb-2">{option.title}</h3>
                        <p className=" mb-4">{option.description}</p>
                        <Button variant="outline" className="hover:bg-">
                          {option.action}
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at one of our global locations or schedule a virtual meeting
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <img
                  src={location.image}
                  alt={location.city}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{location.city}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{location.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-600">{location.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-600">{location.email}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      {/* <section className="py-20 bg-neutral-950 text-slate-300">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold  mb-6">Quick Answers</h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Common questions we get from potential customers
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How quickly can I get started?
              </h3>
              <p className="text-gray-600">
                You can start building your website immediately after signing up. 
                Most customers have their site live within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer training?
              </h3>
              <p className="text-gray-600">
                Yes! We provide comprehensive onboarding, video tutorials, 
                and personal training sessions for enterprise customers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can you migrate my existing website?
              </h3>
              <p className="text-gray-600">
                Absolutely! Our team can help migrate your existing website 
                and integrate it with our appointment scheduling system.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What's your support response time?
              </h3>
              <p className="text-gray-600">
                We typically respond to support requests within 2 hours during 
                business hours, and within 24 hours on weekends.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <CtaSection/>
      {/* <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Don't wait - start building your professional online presence today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Contact;
