'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

// Testimonial data
const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Cardiologist",
    image: "/testimonials/doctor1.jpg", // Add actual image paths when available
    quote: "RapidAid has transformed how I manage patient records. The emergency access feature has literally saved lives in critical situations.",
    stars: 5
  },
  {
    name: "James Wilson",
    role: "Patient",
    image: "/testimonials/patient1.jpg",
    quote: "I feel secure knowing my medical information is available in emergencies. The biometric access makes me confident my data is protected.",
    stars: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Emergency Responder",
    image: "/testimonials/staff1.jpg",
    quote: "The QR code system gives us instant access to critical patient data when every second counts. It's incredibly user-friendly even in high-pressure situations.",
    stars: 4
  },
  {
    name: "Dr. Michael Chen",
    role: "General Practitioner",
    image: "/testimonials/doctor2.jpg",
    quote: "I can quickly access my patients' complete medical histories and seamlessly collaborate with specialists. RapidAid has greatly improved our efficiency.",
    stars: 5
  },
  {
    name: "Lisa Thompson",
    role: "Medical Staff",
    image: "/testimonials/staff2.jpg",
    quote: "Uploading and organizing patient records is so intuitive. The notification system ensures everyone stays informed about important updates.",
    stars: 4
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Autoplay testimonials
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);
  
  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);
  
  // Navigation handlers
  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-dark text-lg">
            Hear from healthcare professionals, patients, and emergency staff who rely on RapidAid
          </p>
        </motion.div>
        
        <div 
          className="max-w-5xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Testimonial slider */}
          <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Image placeholder - replace with actual images */}
                  <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden bg-gray-light dark:bg-gray-700 shrink-0">
                    {/* If you have actual images, replace this div with Image component */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm text-gray-medium">Photo</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    {/* Quote */}
                    <div className="mb-6">
                      <div className="text-6xl text-gray-light dark:text-gray-600 leading-none font-serif absolute -top-2 left-4 md:left-8">
                        "
                      </div>
                      <p className="text-lg md:text-xl italic text-gray-dark relative z-10 pt-4">
                        {testimonials[current].quote}
                      </p>
                      <div className="text-6xl text-gray-light dark:text-gray-600 leading-none font-serif absolute bottom-8 right-4 md:right-12">
                        "
                      </div>
                    </div>
                    
                    {/* Author info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
                        <p className="text-gray-dark">{testimonials[current].role}</p>
                      </div>
                      
                      {/* Star rating */}
                      <div className="flex text-warning">
                        {[...Array(5)].map((_, i) => (
                          <FiStar 
                            key={i} 
                            className={i < testimonials[current].stars ? "fill-current" : ""} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation buttons */}
            <motion.button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center text-gray-dark z-10"
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronLeft size={20} />
            </motion.button>
            
            <motion.button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center text-gray-dark z-10"
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronRight size={20} />
            </motion.button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-primary w-6' : 'bg-gray-light dark:bg-gray-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 