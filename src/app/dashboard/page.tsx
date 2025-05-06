'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FiActivity, 
  FiFileText, 
  FiCalendar, 
  FiClock, 
  FiAlertTriangle, 
  FiShare2, 
  FiArrowRight, 
  FiHeart, 
  FiTrendingUp 
} from 'react-icons/fi';

// Mock data
const mockUser = {
  name: 'John Doe',
  role: 'patient',
  recentActivity: [
    { id: 1, type: 'upload', title: 'Blood Test Results', date: '2023-04-28', doctor: 'Dr. Sarah Johnson' },
    { id: 2, type: 'view', title: 'Prescription Updated', date: '2023-04-25', doctor: 'Dr. Michael Chen' },
    { id: 3, type: 'share', title: 'Records Shared', date: '2023-04-20', with: 'Family Member' }
  ],
  upcomingAppointments: [
    { id: 1, doctor: 'Dr. Sarah Johnson', specialty: 'Cardiology', date: '2023-05-15', time: '10:00 AM' },
    { id: 2, doctor: 'Dr. Michael Chen', specialty: 'General Practice', date: '2023-05-28', time: '2:30 PM' }
  ],
  healthMetrics: {
    bloodPressure: '120/80',
    heartRate: '72 bpm',
    glucose: '95 mg/dL',
    lastUpdated: '2023-04-27'
  }
};

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between mb-8 items-start md:items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, {mockUser.name}!</h1>
          <p className="text-gray-dark">Here's an overview of your health records and activity</p>
        </div>

        <div className="mt-4 md:mt-0 flex gap-2">
          <Link 
            href="/dashboard/emergency" 
            className="btn-outline flex items-center gap-2 text-sm"
          >
            <FiAlertTriangle />
            Emergency QR
          </Link>
          <Link 
            href="/dashboard/medical-records" 
            className="btn-primary flex items-center gap-2 text-sm"
          >
            <FiFileText />
            View Records
          </Link>
        </div>
      </div>

      {/* Dashboard Tabs */}
      <div className="mb-6 border-b border-gray-light">
        <div className="flex space-x-6">
          <TabButton 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')}
            icon={<FiActivity />}
            label="Overview"
          />
          <TabButton 
            active={activeTab === 'records'} 
            onClick={() => setActiveTab('records')}
            icon={<FiFileText />}
            label="Records"
          />
          <TabButton 
            active={activeTab === 'appointments'} 
            onClick={() => setActiveTab('appointments')}
            icon={<FiCalendar />}
            label="Appointments"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Health Summary Card */}
        <motion.div 
          className="col-span-1 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold flex items-center">
              <FiHeart className="mr-2 text-accent" />
              Health Metrics
            </h2>
            <span className="text-xs text-gray-dark">
              Last updated: {mockUser.healthMetrics.lastUpdated}
            </span>
          </div>
          
          <div className="space-y-4">
            <MetricItem 
              label="Blood Pressure" 
              value={mockUser.healthMetrics.bloodPressure} 
              icon={<FiActivity className="text-primary" />}
            />
            <MetricItem 
              label="Heart Rate" 
              value={mockUser.healthMetrics.heartRate} 
              icon={<FiHeart className="text-accent" />}
            />
            <MetricItem 
              label="Glucose Level" 
              value={mockUser.healthMetrics.glucose} 
              icon={<FiTrendingUp className="text-success" />}
            />
          </div>

          <div className="mt-6">
            <Link
              href="/dashboard/health-metrics"
              className="text-primary text-sm font-medium flex items-center hover:underline"
            >
              View detailed health metrics
              <FiArrowRight className="ml-1" size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div 
          className="col-span-1 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold flex items-center">
              <FiActivity className="mr-2 text-primary" />
              Recent Activity
            </h2>
            <span className="text-primary text-xs font-medium cursor-pointer hover:underline">
              View all
            </span>
          </div>
          
          <div className="space-y-4">
            {mockUser.recentActivity.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </div>
        </motion.div>

        {/* Upcoming Appointments */}
        <motion.div 
          className="col-span-1 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold flex items-center">
              <FiCalendar className="mr-2 text-secondary" />
              Upcoming Appointments
            </h2>
            <Link 
              href="/dashboard/appointments"
              className="text-primary text-xs font-medium hover:underline"
            >
              Schedule new
            </Link>
          </div>
          
          {mockUser.upcomingAppointments.length > 0 ? (
            <div className="space-y-4">
              {mockUser.upcomingAppointments.map((appointment) => (
                <AppointmentItem key={appointment.id} appointment={appointment} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-dark">
              <FiCalendar className="mx-auto mb-2" size={24} />
              <p>No upcoming appointments</p>
              <button className="text-primary text-sm font-medium mt-2 hover:underline">
                Schedule now
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <QuickAccessCard 
          title="Emergency QR"
          description="Generate a QR code for emergency access"
          icon={<FiAlertTriangle size={24} />}
          href="/dashboard/emergency"
          color="bg-accent/10 text-accent"
          delay={0.3}
        />
        <QuickAccessCard 
          title="Family Access"
          description="Share your records with family members"
          icon={<FiShare2 size={24} />}
          href="/dashboard/family-access"
          color="bg-secondary/10 text-secondary"
          delay={0.4}
        />
        <QuickAccessCard 
          title="Medical Records"
          description="View and manage your health records"
          icon={<FiFileText size={24} />}
          href="/dashboard/medical-records"
          color="bg-primary/10 text-primary"
          delay={0.5}
        />
        <QuickAccessCard 
          title="Appointments"
          description="Schedule and manage appointments"
          icon={<FiCalendar size={24} />}
          href="/dashboard/appointments"
          color="bg-success/10 text-success"
          delay={0.6}
        />
      </div>
    </div>
  );
}

// Component for dashboard tab buttons
const TabButton = ({ active, onClick, icon, label }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center pb-3 px-1 border-b-2 transition-colors ${
        active 
          ? 'border-primary text-primary' 
          : 'border-transparent text-gray-dark hover:text-primary hover:border-primary/50'
      }`}
    >
      <span className="mr-2">{icon}</span>
      {label}
    </button>
  );
};

// Component for health metric items
const MetricItem = ({ label, value, icon }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="mr-3">
          {icon}
        </div>
        <span className="text-gray-dark">{label}</span>
      </div>
      <span className="font-medium">{value}</span>
    </div>
  );
};

// Component for activity items
const ActivityItem = ({ activity }) => {
  const getActivityIcon = (type) => {
    switch(type) {
      case 'upload': return <FiFileText className="text-primary" />;
      case 'view': return <FiClock className="text-secondary" />;
      case 'share': return <FiShare2 className="text-accent" />;
      default: return <FiActivity className="text-primary" />;
    }
  };

  return (
    <div className="flex items-start">
      <div className="mr-3 mt-1">
        {getActivityIcon(activity.type)}
      </div>
      <div className="flex-1">
        <p className="font-medium">{activity.title}</p>
        <div className="flex justify-between text-xs text-gray-dark">
          <span>{activity.doctor || activity.with}</span>
          <span>{activity.date}</span>
        </div>
      </div>
    </div>
  );
};

// Component for appointment items
const AppointmentItem = ({ appointment }) => {
  return (
    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <div className="flex justify-between mb-1">
        <p className="font-medium">{appointment.doctor}</p>
        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
          {appointment.specialty}
        </span>
      </div>
      <div className="flex items-center text-sm text-gray-dark">
        <FiCalendar className="mr-1" size={14} />
        <span className="mr-3">{appointment.date}</span>
        <FiClock className="mr-1" size={14} />
        <span>{appointment.time}</span>
      </div>
    </div>
  );
};

// Component for quick access cards
const QuickAccessCard = ({ title, description, icon, href, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <Link 
        href={href}
        className="block h-full bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-shadow hover:shadow-lg"
      >
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-dark">{description}</p>
      </Link>
    </motion.div>
  );
}; 