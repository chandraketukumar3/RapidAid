'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiAlertTriangle, 
  FiDownload, 
  FiShare2, 
  FiRotateCw, 
  FiLock, 
  FiUnlock,
  FiHelpCircle,
  FiInfo
} from 'react-icons/fi';
import QRCode from 'qrcode.react';

// Mock user data
const mockUser = {
  id: 'user-123',
  name: 'John Doe',
  bloodGroup: 'O+',
  emergencyContacts: [
    { name: 'Jane Doe', relation: 'Spouse', phone: '(555) 123-4567' },
    { name: 'Michael Doe', relation: 'Brother', phone: '(555) 987-6543' }
  ],
  allergies: ['Penicillin', 'Peanuts'],
  chronicConditions: ['Asthma', 'Hypertension'],
  medications: ['Albuterol', 'Lisinopril']
};

export default function EmergencyAccessPage() {
  const [qrValue, setQrValue] = useState('');
  const [dataToShare, setDataToShare] = useState({
    basicInfo: true,
    emergencyContacts: true,
    allergies: true,
    chronicConditions: true,
    medications: true
  });
  const [showQRCode, setShowQRCode] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Generate QR code data based on selected information
  const generateQRCode = () => {
    setIsGenerating(true);
    
    // Prepare the data to be included in the QR code
    const data = {
      id: mockUser.id,
      timestamp: new Date().toISOString(),
      data: {}
    };
    
    if (dataToShare.basicInfo) {
      data.data.basicInfo = {
        name: mockUser.name,
        bloodGroup: mockUser.bloodGroup
      };
    }
    
    if (dataToShare.emergencyContacts) {
      data.data.emergencyContacts = mockUser.emergencyContacts;
    }
    
    if (dataToShare.allergies) {
      data.data.allergies = mockUser.allergies;
    }
    
    if (dataToShare.chronicConditions) {
      data.data.chronicConditions = mockUser.chronicConditions;
    }
    
    if (dataToShare.medications) {
      data.data.medications = mockUser.medications;
    }
    
    // Convert data to a JSON string
    const jsonData = JSON.stringify(data);
    
    // In a real app, you would encrypt this data and/or add authentication
    // For demo purposes, we're just using the JSON string
    
    // Simulate a delay for loading state
    setTimeout(() => {
      setQrValue(jsonData);
      setShowQRCode(true);
      setIsGenerating(false);
    }, 1500);
  };
  
  // Download QR code as image
  const downloadQRCode = () => {
    const canvas = document.getElementById('emergency-qr-code');
    if (canvas) {
      const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'rapidaid-emergency-qr.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };
  
  // Reset QR code and options
  const resetQRCode = () => {
    setShowQRCode(false);
    setQrValue('');
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center">
              <FiAlertTriangle className="mr-2 text-accent" />
              Emergency Access
            </h1>
            <p className="text-gray-dark">Generate a QR code with your critical medical information for emergency situations</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* QR Code Section */}
        <div>
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Red alert badge */}
            <div className="absolute top-4 right-4 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium flex items-center">
              <FiAlertTriangle className="mr-1" />
              Emergency Only
            </div>
            
            <h2 className="text-lg font-semibold mb-6">Emergency QR Code</h2>
            
            <AnimatePresence mode="wait">
              {!showQRCode ? (
                <motion.div
                  key="instructions"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-8"
                >
                  <div className="w-32 h-32 mx-auto border-2 border-dashed border-gray-light dark:border-gray-700 rounded-lg flex items-center justify-center mb-6">
                    <FiAlertTriangle size={40} className="text-gray-medium" />
                  </div>
                  <p className="text-gray-dark mb-6">
                    Select the information you want to include in your emergency QR code, then click "Generate QR Code".
                  </p>
                  
                  <motion.button
                    onClick={generateQRCode}
                    className="btn-primary flex items-center justify-center gap-2 w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        Generate QR Code
                      </>
                    )}
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="qrcode"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="bg-white p-6 rounded-lg mb-6 inline-block">
                    <QRCode 
                      id="emergency-qr-code"
                      value={qrValue} 
                      size={200} 
                      level="H"
                      includeMargin
                      renderAs="canvas"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <motion.button
                      onClick={downloadQRCode}
                      className="btn-primary flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiDownload size={16} />
                      Download
                    </motion.button>
                    
                    <motion.button
                      onClick={() => {}} // Implement share functionality
                      className="btn-outline flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiShare2 size={16} />
                      Share
                    </motion.button>
                    
                    <motion.button
                      onClick={resetQRCode}
                      className="btn-outline flex items-center justify-center gap-2 sm:ml-auto"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiRotateCw size={16} />
                      Reset
                    </motion.button>
                  </div>
                  
                  <p className="text-sm text-gray-dark mt-4">
                    <FiInfo className="inline mr-1" />
                    This QR code contains the critical medical information you selected.
                    Print it and carry it with you for emergency situations.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Security note */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mt-4 text-sm text-gray-dark flex items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FiLock className="text-primary mr-2 mt-0.5 shrink-0" size={16} />
            <p>
              Your medical information is encrypted and can only be accessed by authorized emergency personnel.
              The QR code becomes invalid after 90 days for security reasons.
            </p>
          </motion.div>
        </div>
        
        {/* Settings Section */}
        <div>
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="p-6 border-b border-gray-light dark:border-gray-700">
              <h2 className="text-lg font-semibold">Information to Include</h2>
              <p className="text-sm text-gray-dark mt-1">
                Select the information you want to be accessible in emergency situations.
              </p>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <InfoToggle
                  id="basicInfo"
                  label="Basic Information"
                  description="Name, blood group"
                  checked={dataToShare.basicInfo}
                  onChange={() => setDataToShare({...dataToShare, basicInfo: !dataToShare.basicInfo})}
                  disabled={true} // Basic info is always required
                />
                
                <InfoToggle
                  id="emergencyContacts"
                  label="Emergency Contacts"
                  description="Contact details of your emergency contacts"
                  checked={dataToShare.emergencyContacts}
                  onChange={() => setDataToShare({...dataToShare, emergencyContacts: !dataToShare.emergencyContacts})}
                />
                
                <InfoToggle
                  id="allergies"
                  label="Allergies"
                  description="Your allergies and adverse reactions"
                  checked={dataToShare.allergies}
                  onChange={() => setDataToShare({...dataToShare, allergies: !dataToShare.allergies})}
                />
                
                <InfoToggle
                  id="chronicConditions"
                  label="Chronic Conditions"
                  description="Your ongoing medical conditions"
                  checked={dataToShare.chronicConditions}
                  onChange={() => setDataToShare({...dataToShare, chronicConditions: !dataToShare.chronicConditions})}
                />
                
                <InfoToggle
                  id="medications"
                  label="Current Medications"
                  description="Medications you are currently taking"
                  checked={dataToShare.medications}
                  onChange={() => setDataToShare({...dataToShare, medications: !dataToShare.medications})}
                />
              </div>
            </div>
          </motion.div>
          
          {/* Help section */}
          <motion.div
            className="mt-4 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-md font-semibold mb-3 flex items-center">
              <FiHelpCircle className="mr-2 text-secondary" />
              How It Works
            </h3>
            
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-dark">
              <li>Generate a QR code with your selected medical information</li>
              <li>Download the QR code image or share it digitally</li>
              <li>Print the QR code and keep it in your wallet or phone case</li>
              <li>In an emergency, medical staff can scan the code to access your critical information</li>
            </ol>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Component for toggling information inclusion
const InfoToggle = ({ id, label, description, checked, onChange, disabled = false }) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={id}
          type="checkbox"
          className="h-4 w-4 text-primary focus:ring-primary rounded"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
      <div className="ml-3">
        <label htmlFor={id} className="font-medium">
          {label}
          {disabled && <span className="text-xs text-accent ml-2">(Required)</span>}
        </label>
        <p className="text-sm text-gray-dark">{description}</p>
      </div>
      <div className="ml-auto">
        {checked ? (
          <FiUnlock className="text-success" />
        ) : (
          <FiLock className="text-gray-dark" />
        )}
      </div>
    </div>
  );
}; 