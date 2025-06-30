
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Zap, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResizableNavbar = () => {
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
      className={` fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-neutral-950 backdrop-blur-xl border-b border-neutral/50 shadow-2xl shadow-violet-500/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-all duration-300 group-hover:scale-110">
                  <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent hidden sm:block">
                GeniePal
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
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

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <Button 
              variant="outline" 
              size="sm"
              className="bg-slate-900/50 border-slate-700 hover:border-violet-500/50 hover:bg-slate-800/50 text-slate-300 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Demo
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 hover:from-violet-700 hover:via-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105"
            >
              Start
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-slate-300 hover:text-white transition-colors duration-300 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 py-4 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-800/50 shadow-2xl shadow-violet-500/10"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-6 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 rounded-lg mx-2 ${
                  location.pathname === item.path ? 'text-violet-400 bg-slate-800/30' : ''
                }`}
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
      </AnimatePresence>
    </motion.header>
  );
};

export default ResizableNavbar;
