'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiInstagram, FiTwitter, FiFacebook, FiLinkedin, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-12 pb-6 relative">
      {/* Scroll to top button */}
      <motion.button
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"
        onClick={scrollToTop}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FiArrowUp size={20} />
      </motion.button>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-accent">Rapid</span>
              <span className="text-primary">Aid</span>
            </Link>
            <p className="text-gray-dark mb-4">
              Revolutionizing healthcare access through secure digital health records and emergency response systems.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<FiTwitter />} />
              <SocialIcon icon={<FiFacebook />} />
              <SocialIcon icon={<FiInstagram />} />
              <SocialIcon icon={<FiLinkedin />} />
            </div>
          </div>
          
          {/* Links section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/" label="Home" />
              <FooterLink href="#features" label="Features" />
              <FooterLink href="#how-it-works" label="How It Works" />
              <FooterLink href="#contact" label="Contact Us" />
            </ul>
          </div>
          
          {/* Services section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/auth/register" label="For Doctors" />
              <FooterLink href="/auth/register" label="For Patients" />
              <FooterLink href="/auth/register" label="For Emergency Services" />
              <FooterLink href="/auth/register" label="For Healthcare Staff" />
            </ul>
          </div>
          
          {/* Contact section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">1234 Health Street</p>
            <p className="mb-2">Medical Valley, MD 98765</p>
            <p className="mb-2">contact@rapidaid.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="pt-6 border-t border-gray-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-dark text-sm">
              &copy; {new Date().getFullYear()} RapidAid. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-sm text-gray-dark hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-dark hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-gray-dark hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => {
  return (
    <motion.a
      href="#"
      className="w-8 h-8 rounded-full bg-gray-light dark:bg-gray-800 flex items-center justify-center text-gray-dark hover:bg-primary hover:text-white transition-colors"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
};

const FooterLink = ({ href, label }) => {
  return (
    <li>
      <Link 
        href={href}
        className="text-gray-dark hover:text-primary transition-colors"
      >
        {label}
      </Link>
    </li>
  );
};

export default Footer; 