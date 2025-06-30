
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BackgroundBeams } from '../aceternity/background-beams';
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Calendar,
  Globe
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Features', path: '/features' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      { name: 'Website Building', path: '#' },
      { name: 'Appointment System', path: '#' },
      { name: 'Dashboard Analytics', path: '#' },
      { name: 'Custom Integration', path: '#' },
    ],
    support: [
      { name: 'Help Center', path: '#' },
      { name: 'Documentation', path: '#' },
      { name: 'API Reference', path: '#' },
      { name: 'Community', path: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', color: 'hover:text-cyan-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-300' },
  ];

  return (
    <footer className="border-t border-border relative">
      <BackgroundBeams/>
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center animate-glow">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">
                GeniePal
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Empowering businesses with modern websites and integrated appointment scheduling solutions. 
              Your success is our mission, building the future of digital business presence.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="p-1 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">hello@geniepal.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-1 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-1 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links and Newsletter */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-muted-foreground">Follow us:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-muted-foreground transition-all duration-300 p-2 rounded-lg hover:bg-primary/10 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                © 2024 GeniePal. All rights reserved.
              </p>
              <p className="text-muted-foreground/60 text-xs mt-1">
                Built with ❤️ for modern businesses
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
