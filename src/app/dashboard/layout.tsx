'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMenu, 
  FiX, 
  FiHome, 
  FiUser, 
  FiUsers, 
  FiFileText, 
  FiSettings, 
  FiBell, 
  FiShare2,
  FiLogOut, 
  FiAlertTriangle 
} from 'react-icons/fi';

// Mock user data (replace with actual auth)
const mockUser = {
  name: 'John Doe',
  role: 'patient', // Change this to 'doctor' or 'staff' to test different navigation
  avatar: '/avatars/default.png',
};

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Check if mobile on mount and on resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    // Check on mount
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Navigation links based on user role
  const getNavLinks = () => {
    const commonLinks = [
      { href: '/dashboard', label: 'Dashboard', icon: <FiHome size={20} /> },
      { href: '/dashboard/profile', label: 'My Profile', icon: <FiUser size={20} /> },
      { href: '/dashboard/notifications', label: 'Notifications', icon: <FiBell size={20} /> },
      { href: '/dashboard/settings', label: 'Settings', icon: <FiSettings size={20} /> },
    ];
    
    const roleSpecificLinks = {
      patient: [
        { href: '/dashboard/medical-records', label: 'Medical Records', icon: <FiFileText size={20} /> },
        { href: '/dashboard/family-access', label: 'Family Access', icon: <FiShare2 size={20} /> },
        { href: '/dashboard/emergency', label: 'Emergency Access', icon: <FiAlertTriangle size={20} /> },
      ],
      doctor: [
        { href: '/dashboard/patients', label: 'My Patients', icon: <FiUsers size={20} /> },
        { href: '/dashboard/medical-records', label: 'Medical Records', icon: <FiFileText size={20} /> },
        { href: '/dashboard/emergency-alerts', label: 'Emergency Alerts', icon: <FiAlertTriangle size={20} /> },
      ],
      staff: [
        { href: '/dashboard/patients', label: 'Patients', icon: <FiUsers size={20} /> },
        { href: '/dashboard/uploads', label: 'Report Uploads', icon: <FiFileText size={20} /> },
      ],
    };
    
    return [...commonLinks, ...(roleSpecificLinks[mockUser.role] || [])];
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Overlay for mobile */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20" 
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.aside
            className={`fixed lg:relative z-30 h-full ${
              isMobile ? 'w-64' : 'w-64 lg:w-72'
            } bg-white dark:bg-gray-800 shadow-lg`}
            initial={{ x: isMobile ? -320 : 0, opacity: isMobile ? 0 : 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -320, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Logo and close button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-light dark:border-gray-700">
              <Link 
                href="/dashboard" 
                className="text-xl font-bold flex items-center"
              >
                <span className="text-accent">Rapid</span>
                <span className="text-primary">Aid</span>
              </Link>
              {isMobile && (
                <button 
                  onClick={toggleSidebar}
                  className="text-gray-dark hover:text-primary"
                >
                  <FiX size={24} />
                </button>
              )}
            </div>
            
            {/* User info */}
            <div className="p-4 border-b border-gray-light dark:border-gray-700">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-light dark:bg-gray-700 flex items-center justify-center overflow-hidden mr-3">
                  {/* Avatar placeholder - replace with actual avatar */}
                  <span className="text-sm font-medium">
                    {mockUser.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium">{mockUser.name}</h3>
                  <p className="text-xs text-gray-dark capitalize">{mockUser.role}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="p-4">
              <ul className="space-y-1">
                {getNavLinks().map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                        pathname === link.href
                          ? 'bg-primary text-white'
                          : 'hover:bg-gray-light dark:hover:bg-gray-700'
                      }`}
                    >
                      <span className="mr-3">{link.icon}</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Logout */}
            <div className="absolute bottom-0 w-full p-4 border-t border-gray-light dark:border-gray-700">
              <button 
                className="flex items-center w-full px-4 py-3 rounded-lg hover:bg-gray-light dark:hover:bg-gray-700 transition-colors text-gray-dark"
              >
                <FiLogOut className="mr-3" size={20} />
                Logout
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Top header */}
        <header className="bg-white dark:bg-gray-800 shadow p-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <button 
              onClick={toggleSidebar}
              className="text-gray-dark hover:text-primary"
            >
              <FiMenu size={24} />
            </button>
            
            <div className="flex items-center space-x-4">
              <button className="relative text-gray-dark hover:text-primary">
                <FiBell size={20} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              
              <div className="w-8 h-8 rounded-full bg-gray-light dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                {/* Avatar placeholder - replace with actual avatar */}
                <span className="text-xs font-medium">
                  {mockUser.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
          </div>
        </header>
        
        {/* Page content */}
        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 