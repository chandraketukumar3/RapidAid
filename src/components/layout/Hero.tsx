'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content - Left side */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-primary">Digital Health Records</span> for 
              <span className="text-accent block mt-2">Emergency Response</span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-lg text-gray-dark mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            RapidAid provides secure access to critical health information during emergencies. Our platform connects doctors, patients, and emergency responders to save lives when every second counts.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              href="/auth/register" 
              className="btn-primary flex items-center justify-center sm:justify-start gap-2 group"
            >
              Get Started
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link 
              href="#how-it-works" 
              className="btn-outline flex items-center justify-center sm:justify-start gap-2"
            >
              How It Works
            </Link>
          </motion.div>

          <motion.div
            className="mt-12 flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 bg-gray-light dark:bg-gray-700 flex items-center justify-center text-xs font-medium overflow-hidden"
                >
                  {/* Replace with actual user avatars if available */}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-dark">
              Trusted by <span className="font-medium text-foreground">2,000+</span> healthcare professionals
            </p>
          </motion.div>
        </div>

        {/* Image - Right side */}
        <div className="order-1 lg:order-2 relative">
          <motion.div
            className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Replace with actual hero image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl text-white font-medium">Hero Image Placeholder</span>
            </div>
          </motion.div>

          {/* Animated floating elements */}
          <motion.div
            className="absolute top-10 -left-10 w-20 h-20 bg-accent rounded-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            style={{ zIndex: -1 }}
          />
          
          <motion.div
            className="absolute -bottom-5 right-20 w-12 h-12 bg-secondary rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{ zIndex: -1 }}
          />
          
          <motion.div
            className="absolute top-1/2 -right-5 w-16 h-16 bg-primary rounded-lg transform rotate-45"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            style={{ zIndex: -1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 