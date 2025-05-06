'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiLock, FiMail, FiUser, FiUserPlus } from 'react-icons/fi';

// Role options
const roles = [
  { id: 'patient', label: 'Patient', icon: <FiUser size={20} /> },
  { id: 'doctor', label: 'Doctor', icon: <FiUserPlus size={20} /> },
  { id: 'staff', label: 'Medical Staff', icon: <FiUserPlus size={20} /> }
];

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState('patient');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Here you would handle authentication with your backend
    // For now, just simulate a loading state
    
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard based on role
      window.location.href = `/dashboard/${selectedRole}`;
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-primary to-secondary text-white text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
              <p className="text-white/80">Sign in to access your RapidAid account</p>
            </motion.div>
          </div>
          
          {/* Form */}
          <div className="p-6">
            {/* Role Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">Login as:</label>
              <div className="grid grid-cols-3 gap-3">
                {roles.map((role) => (
                  <motion.button
                    key={role.id}
                    type="button"
                    className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${
                      selectedRole === role.id 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-gray-light hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedRole(role.id)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="mb-1">{role.icon}</span>
                    <span className="text-sm">{role.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
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
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-light text-primary focus:ring-primary"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-dark">
                      Remember me
                    </label>
                  </div>
                  
                  <div className="text-sm">
                    <Link 
                      href="/auth/forgot-password" 
                      className="text-primary hover:text-primary-dark"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  className="btn-primary w-full flex justify-center items-center gap-2"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    <>
                      <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Signing in...
                    </>
                  ) : 'Sign In'}
                </motion.button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-dark">
                Don't have an account?{' '}
                <Link 
                  href="/auth/register" 
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
        
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
      </motion.div>
    </div>
  );
} 