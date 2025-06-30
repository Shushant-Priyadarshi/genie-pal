
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Calendar, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-neutral-950 backdrop-blur-xl border-b bg-neutral-950/50 shadow-2xl shadow-violet-500/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-all duration-300 group-hover:scale-110">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              GeniePal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-slate-300 hover:text-white transition-all duration-300 font-medium group ${
                  location.pathname === item.path ? 'text-violet-400' : ''
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="bg-slate-900/50 border-slate-700 hover:border-violet-500/50 hover:bg-slate-800/50 text-slate-300 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Demo
            </Button>
            <Button className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 hover:from-violet-700 hover:via-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 py-4 bg-neutral-950 backdrop-blur-xl rounded-2xl border bg-neutral-950/50 shadow-2xl shadow-violet-500/10"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-6 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 rounded-lg mx-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-4 space-y-3">
              <Button variant="outline" className="w-full bg-slate-900/50 border-slate-700 hover:border-violet-500/50 text-slate-300 hover:text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Book Demo
              </Button>
              <Button className="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-white shadow-lg shadow-violet-500/30">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
