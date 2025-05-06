'use client';

import { motion } from 'framer-motion';
import { 
  FiUserPlus, 
  FiUploadCloud, 
  FiUserCheck, 
  FiAlertCircle, 
  FiCheckCircle 
} from 'react-icons/fi';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FiUserPlus size={24} />,
      title: "Register as Patient, Doctor or Staff",
      description: "Create your secure account with role-based access and complete your profile.",
      color: "text-primary",
      background: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: <FiUploadCloud size={24} />,
      title: "Upload Medical Records",
      description: "Doctors and staff can securely upload and manage patient records and reports.",
      color: "text-secondary",
      background: "bg-sky-50 dark:bg-sky-900/20",
    },
    {
      icon: <FiUserCheck size={24} />,
      title: "Access Your Data Securely",
      description: "Patients use biometric or pattern-based authentication to view their health data.",
      color: "text-success",
      background: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      icon: <FiAlertCircle size={24} />,
      title: "Generate Emergency QR",
      description: "Create emergency access QR code containing only critical medical information.",
      color: "text-accent",
      background: "bg-rose-50 dark:bg-rose-900/20",
    },
    {
      icon: <FiCheckCircle size={24} />,
      title: "Emergency Response Access",
      description: "First responders scan QR code for instant access to life-saving information.",
      color: "text-warning",
      background: "bg-amber-50 dark:bg-amber-900/20",
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How RapidAid Works
          </h2>
          <p className="text-gray-dark text-lg">
            Fast, secure, and simple access to medical information when it matters most
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Steps Column 1 */}
          <div className="space-y-6">
            {steps.slice(0, 2).map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>

          {/* Center Animation */}
          <div className="flex items-center justify-center lg:py-0 py-8">
            <motion.div 
              className="w-64 h-64 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Main circle */}
              <motion.div 
                className="w-full h-full rounded-full bg-gradient-to-r from-primary to-secondary opacity-10 absolute"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              {/* Second pulsing circle */}
              <motion.div 
                className="w-44 h-44 rounded-full bg-gradient-to-r from-secondary to-accent opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 0.75 }}
              />
              
              {/* Innermost circle */}
              <motion.div 
                className="w-32 h-32 rounded-full bg-white dark:bg-gray-800 shadow-xl flex items-center justify-center text-center p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <span className="font-bold text-lg text-primary">RapidAid</span>
              </motion.div>
              
              {/* Floating icon elements */}
              <FloatingIcon 
                position="top-0 left-10" 
                icon={<FiUserPlus size={20} />} 
                delay={0} 
                background="bg-primary"
              />
              <FloatingIcon 
                position="top-8 right-4" 
                icon={<FiUploadCloud size={20} />} 
                delay={1.5} 
                background="bg-secondary"
              />
              <FloatingIcon 
                position="bottom-10 left-4" 
                icon={<FiUserCheck size={20} />} 
                delay={1} 
                background="bg-success"
              />
              <FloatingIcon 
                position="bottom-2 right-12" 
                icon={<FiAlertCircle size={20} />} 
                delay={0.5} 
                background="bg-accent"
              />
            </motion.div>
          </div>

          {/* Steps Column 2 */}
          <div className="space-y-6">
            {steps.slice(2, 5).map((step, index) => (
              <StepCard key={index + 2} step={step} index={index + 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step, index }) => {
  return (
    <motion.div
      className={`${step.background} rounded-xl p-6 transition-all duration-300`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.03 }}
    >
      <div className={`${step.color} mb-4`}>
        {step.icon}
      </div>
      <h3 className={`text-lg font-bold mb-2 ${step.color}`}>
        {step.title}
      </h3>
      <p className="text-gray-dark text-sm">
        {step.description}
      </p>
    </motion.div>
  );
};

const FloatingIcon = ({ position, icon, delay, background }) => {
  return (
    <motion.div 
      className={`absolute ${position} ${background} w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay, duration: 0.5 }}
      whileHover={{ scale: 1.2 }}
    >
      {icon}
    </motion.div>
  );
};

export default HowItWorks; 