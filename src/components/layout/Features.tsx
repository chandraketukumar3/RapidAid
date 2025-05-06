'use client';

import { motion } from 'framer-motion';
import { 
  FiLock, 
  FiAlertTriangle, 
  FiUsers, 
  FiFileText, 
  FiSmartphone, 
  FiMap 
} from 'react-icons/fi';

const Features = () => {
  const features = [
    {
      icon: <FiFileText size={24} />,
      title: "Digital Health Records",
      description: "Store and access complete medical history, reports, and prescriptions with end-to-end encryption.",
      color: "bg-blue-50 dark:bg-blue-900/20",
      textColor: "text-primary",
      iconBg: "bg-primary"
    },
    {
      icon: <FiAlertTriangle size={24} />,
      title: "Emergency Access",
      description: "QR code-based emergency access for first responders to view critical medical information.",
      color: "bg-rose-50 dark:bg-rose-900/20",
      textColor: "text-accent",
      iconBg: "bg-accent"
    },
    {
      icon: <FiLock size={24} />,
      title: "Secure Authentication",
      description: "Biometric and pattern-based authentication ensures your medical data stays private.",
      color: "bg-emerald-50 dark:bg-emerald-900/20",
      textColor: "text-success",
      iconBg: "bg-success"
    },
    {
      icon: <FiUsers size={24} />,
      title: "Family Sharing",
      description: "Securely share your medical records with family members with custom permission levels.",
      color: "bg-amber-50 dark:bg-amber-900/20",
      textColor: "text-warning",
      iconBg: "bg-warning"
    },
    {
      icon: <FiMap size={24} />,
      title: "Nearby Assistance",
      description: "Locate and call nearby emergency services with GPS-based automatic location sharing.",
      color: "bg-indigo-50 dark:bg-indigo-900/20",
      textColor: "text-indigo-600 dark:text-indigo-400",
      iconBg: "bg-indigo-600"
    },
    {
      icon: <FiSmartphone size={24} />,
      title: "Real-time Notifications",
      description: "Instant alerts for emergency situations, record updates, and doctor appointments.",
      color: "bg-sky-50 dark:bg-sky-900/20",
      textColor: "text-secondary",
      iconBg: "bg-secondary"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Complete Health Management
          </h2>
          <p className="text-gray-dark text-lg">
            RapidAid combines security, accessibility, and emergency response in one comprehensive platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      className={`${feature.color} rounded-xl p-8 h-full transition-all duration-300 hover:shadow-lg`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
    >
      <div className={`${feature.iconBg} w-12 h-12 rounded-lg text-white flex items-center justify-center mb-6`}>
        {feature.icon}
      </div>
      <h3 className={`text-xl font-bold mb-3 ${feature.textColor}`}>
        {feature.title}
      </h3>
      <p className="text-gray-dark">
        {feature.description}
      </p>
    </motion.div>
  );
};

export default Features; 