'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo with animation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="text-2xl font-bold text-primary flex items-center">
            <span className="mr-2 text-accent">Rapid</span>Aid
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <NavLink href="/" label="Home" />
          <NavLink href="#features" label="Features" />
          <NavLink href="#how-it-works" label="How It Works" />
          <NavLink href="#contact" label="Contact" />
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/auth/login" 
              className="btn-outline py-1.5 px-4 text-sm"
            >
              Log In
            </Link>
            <Link 
              href="/auth/register" 
              className="btn-primary py-1.5 px-4 text-sm"
            >
              Sign Up
            </Link>
          </div>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-foreground focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 bg-white dark:bg-slate-900 z-40 pt-20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 flex flex-col space-y-6 pt-6">
              <MobileNavLink href="/" label="Home" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="#features" label="Features" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="#how-it-works" label="How It Works" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="#contact" label="Contact" onClick={() => setIsMenuOpen(false)} />
              
              <div className="flex flex-col space-y-4 pt-4 border-t border-gray-light">
                <Link 
                  href="/auth/login" 
                  className="btn-outline text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link 
                  href="/auth/register" 
                  className="btn-primary text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Desktop nav link with hover animation
const NavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link 
      href={href} 
      className="relative text-foreground hover:text-primary transition-colors group"
    >
      {label}
      <motion.span 
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
};

// Mobile nav link with animation
const MobileNavLink = ({ 
  href, 
  label, 
  onClick 
}: { 
  href: string; 
  label: string;
  onClick: () => void;
}) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
    >
      <Link 
        href={href} 
        className="text-xl font-medium text-foreground hover:text-primary py-2 block border-b border-gray-light"
        onClick={onClick}
      >
        {label}
      </Link>
    </motion.div>
  );
};

export default Navbar; 