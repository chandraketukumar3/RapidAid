'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiUser, 
  FiUserPlus, 
  FiMail, 
  FiLock, 
  FiPhone, 
  FiCalendar, 
  FiMapPin,
  FiClipboard,
  FiArrowRight,
  FiArrowLeft,
  FiCheckCircle,
  FiHospital
} from 'react-icons/fi';

// Role options
const roles = [
  { 
    id: 'patient', 
    label: 'Patient', 
    icon: <FiUser size={24} />,
    description: 'Access your medical records and share emergency information'
  },
  { 
    id: 'doctor', 
    label: 'Doctor', 
    icon: <FiUserPlus size={24} />,
    description: 'Manage patients and update their medical records'
  },
  { 
    id: 'staff', 
    label: 'Medical Staff', 
    icon: <FiClipboard size={24} />,
    description: 'Upload reports and manage patient documents'
  }
];

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState('');
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    // Doctor/Staff specific fields
    specialization: '',
    licenseNumber: '',
    hospital: '',
    department: '',
    position: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const nextStep = () => {
    setStep(prev => prev + 1);
  };
  
  const prevStep = () => {
    setStep(prev => prev - 1);
  };
  
  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    nextStep();
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Here you would handle registration with your backend
    // For now, just simulate a loading state
    
    setTimeout(() => {
      setIsLoading(false);
      // Move to success step
      setStep(4);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-2xl">
        {/* Progress bar */}
        <div className="mb-8 flex justify-between">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div key={stepNumber} className="flex flex-col items-center">
              <motion.div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  stepNumber < step 
                    ? 'bg-primary text-white' 
                    : stepNumber === step 
                    ? 'bg-primary-light text-white' 
                    : 'bg-gray-light text-gray-dark'
                }`}
                animate={{
                  scale: stepNumber === step ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  duration: 0.5,
                  repeat: stepNumber === step ? Infinity : 0,
                  repeatType: "reverse"
                }}
              >
                {stepNumber < step ? <FiCheckCircle size={16} /> : stepNumber}
              </motion.div>
              <div className={`text-xs mt-1 ${stepNumber <= step ? 'text-primary' : 'text-gray-medium'}`}>
                {stepNumber === 1 ? 'Role' : 
                 stepNumber === 2 ? 'Account' : 
                 stepNumber === 3 ? 'Profile' : 'Done'}
              </div>
            </div>
          ))}
        </div>
        
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 bg-gradient-to-r from-primary to-secondary text-white text-center">
            <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
            <p className="text-white/80">Join RapidAid and improve healthcare coordination</p>
          </div>
          
          <div className="p-6">
            <AnimatePresence mode="wait">
              {/* Step 1: Role Selection */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold mb-6 text-center">Select Your Role</h2>
                  <div className="space-y-4">
                    {roles.map((role) => (
                      <motion.button
                        key={role.id}
                        type="button"
                        className="w-full flex items-center p-4 rounded-lg border border-gray-light hover:border-primary transition-all bg-white dark:bg-gray-800"
                        onClick={() => handleRoleSelection(role.id)}
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(37, 99, 235, 0.05)' }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
                          {role.icon}
                        </div>
                        <div className="text-left">
                          <h3 className="font-medium">{role.label}</h3>
                          <p className="text-sm text-gray-dark">{role.description}</p>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <p className="text-sm text-gray-dark">
                      Already have an account?{' '}
                      <Link 
                        href="/auth/login" 
                        className="text-primary hover:text-primary-dark font-medium"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>
                </motion.div>
              )}
              
              {/* Step 2: Account Details */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold mb-6 text-center">Create Your Account</h2>
                  
                  <form>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-medium">
                            <FiMail />
                          </div>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="input-field pl-10"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-medium">
                            <FiLock />
                          </div>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="input-field pl-10"
                            placeholder="At least 8 characters"
                            value={formData.password}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">Confirm Password</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-medium">
                            <FiLock />
                          </div>
                          <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            required
                            className="input-field pl-10"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-between">
                      <motion.button
                        type="button" 
                        className="btn-outline flex items-center gap-2"
                        onClick={prevStep}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FiArrowLeft />
                        Back
                      </motion.button>
                      
                      <motion.button
                        type="button" 
                        className="btn-primary flex items-center gap-2"
                        onClick={nextStep}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Next
                        <FiArrowRight />
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              )}
              
              {/* Step 3: Profile Details */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold mb-6 text-center">Complete Your Profile</h2>
                  
                  <form onSubmit={handleSubmit}>
                    {/* Common fields for all roles */}
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-medium">
                            <FiUser />
                          </div>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="input-field pl-10"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-medium">
                            <FiPhone />
                          </div>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            className="input-field pl-10"
                            placeholder="Your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      {/* Role-specific fields */}
                      {selectedRole === 'patient' && (
                        <>
                          <div>
                            <label htmlFor="dateOfBirth" className="block text-sm font-medium mb-2">Date of Birth</label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-medium">
                                <FiCalendar />
                              </div>
                              <input
                                id="dateOfBirth"
                                name="dateOfBirth"
                                type="date"
                                className="input-field pl-10"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="address" className="block text-sm font-medium mb-2">Address</label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-medium">
                                <FiMapPin />
                              </div>
                              <input
                                id="address"
                                name="address"
                                type="text"
                                className="input-field pl-10"
                                placeholder="Your address"
                                value={formData.address}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </>
                      )}
                      
                      {selectedRole === 'doctor' && (
                        <>
                          <div>
                            <label htmlFor="specialization" className="block text-sm font-medium mb-2">Specialization</label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-medium">
                                <FiClipboard />
                              </div>
                              <input
                                id="specialization"
                                name="specialization"
                                type="text"
                                className="input-field pl-10"
                                placeholder="Your medical specialization"
                                value={formData.specialization}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="licenseNumber" className="block text-sm font-medium mb-2">License Number</label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-medium">
                                <FiClipboard />
                              </div>
                              <input
                                id="licenseNumber"
                                name="licenseNumber"
                                type="text"
                                className="input-field pl-10"
                                placeholder="Your medical license number"
                                value={formData.licenseNumber}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="hospital" className="block text-sm font-medium mb-2">Hospital/Clinic</label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-medium">
                                <FiHospital />
                              </div>
                              <input
                                id="hospital"
                                name="hospital"
                                type="text"
                                className="input-field pl-10"
                                placeholder="Your hospital or clinic"
                                value={formData.hospital}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </>
                      )}
                      
                      {selectedRole === 'staff' && (
                        <>
                          <div>
                            <label htmlFor="department" className="block text-sm font-medium mb-2">Department</label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-medium">
                                <FiHospital />
                              </div>
                              <input
                                id="department"
                                name="department"
                                type="text"
                                className="input-field pl-10"
                                placeholder="Your department"
                                value={formData.department}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="position" className="block text-sm font-medium mb-2">Position</label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-medium">
                                <FiClipboard />
                              </div>
                              <input
                                id="position"
                                name="position"
                                type="text"
                                className="input-field pl-10"
                                placeholder="Your position"
                                value={formData.position}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="hospital" className="block text-sm font-medium mb-2">Hospital/Clinic</label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-medium">
                                <FiHospital />
                              </div>
                              <input
                                id="hospital"
                                name="hospital"
                                type="text"
                                className="input-field pl-10"
                                placeholder="Your hospital or clinic"
                                value={formData.hospital}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    
                    <div className="mt-8 flex justify-between">
                      <motion.button
                        type="button" 
                        className="btn-outline flex items-center gap-2"
                        onClick={prevStep}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FiArrowLeft />
                        Back
                      </motion.button>
                      
                      <motion.button
                        type="submit" 
                        className="btn-primary flex items-center gap-2"
                        disabled={isLoading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isLoading ? (
                          <>
                            <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                            Creating Account...
                          </>
                        ) : (
                          <>
                            Create Account
                            <FiArrowRight />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              )}
              
              {/* Step 4: Success */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8"
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-success/20 text-success flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: [0, 10, 0] }}
                    transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
                  >
                    <FiCheckCircle size={40} />
                  </motion.div>
                  
                  <h2 className="text-2xl font-bold mb-2">Account Created Successfully!</h2>
                  <p className="text-gray-dark mb-8">
                    Your RapidAid account has been created. You can now log in to access your dashboard.
                  </p>
                  
                  <Link 
                    href="/auth/login" 
                    className="btn-primary"
                  >
                    Go to Login
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        
        {/* Back to homepage link */}
        <div className="mt-6 text-center">
          <Link 
            href="/" 
            className="text-sm text-gray-dark hover:text-primary flex items-center justify-center gap-1"
          >
            <motion.span
              initial={{ x: 5 }}
              animate={{ x: 0 }}
              transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.8 }}
            >
              ←
            </motion.span>
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
} 