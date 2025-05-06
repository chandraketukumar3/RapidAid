'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import './features.css';

import { 
  FiFileText, 
  FiSmartphone, 
  FiRefreshCw, 
  FiBarChart2, 
  FiEdit, 
  FiSearch,
  FiAlertCircle,
  FiClock,
  FiMap,
  FiClipboard,
  FiActivity,
  FiPhone,
  FiLock,
  FiFingerprint,
  FiShield,
  FiUsers,
  FiCalendar,
  FiMessageSquare
} from 'react-icons/fi';

import {
  MdOutlineHospital,
  MdOutlineScience,
  MdOutlineWatch,
  MdMedication,
  MdOutlineBiotech,
  MdFamilyRestroom,
  MdChildCare,
  MdOutlineElderlyWoman,
  MdOutlineHandshake
} from 'react-icons/md';

const FeatureCard = ({ icon, title, description, delay = 0, isVisible = false }) => {
  return (
    <div className={`feature-card ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${delay}ms` }}>
      <div className="feature-card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const FeatureTab = ({ id, title, isActive, onClick }) => {
  return (
    <button 
      onClick={() => onClick(id)} 
      className={`feature-tab ${isActive ? 'feature-tab-active' : ''}`}
    >
      {title}
    </button>
  );
};

export default function Features() {
  const [activeTab, setActiveTab] = useState('health-records');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-reveal');
      scrollElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on first load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Features data
  const featuresData = {
    'health-records': [
      {
        icon: <FiFileText size={32} />,
        title: "Comprehensive Health Records",
        description: "Store your complete medical history, test results, and treatments in one secure location with military-grade encryption."
      },
      {
        icon: <FiSmartphone size={32} />,
        title: "Mobile Access Anywhere",
        description: "Access your medical records anytime, anywhere from any device with our responsive platform."
      },
      {
        icon: <FiRefreshCw size={32} />,
        title: "Real-time Updates",
        description: "Doctors can update your records in real-time, ensuring you always have the most current information."
      },
      {
        icon: <FiBarChart2 size={32} />,
        title: "Health Analytics",
        description: "Visual dashboards track your health metrics over time, helping you spot trends and take proactive measures."
      },
      {
        icon: <FiEdit size={32} />,
        title: "Custom Health Notes",
        description: "Add your own notes and observations to complement professional medical records."
      },
      {
        icon: <FiSearch size={32} />,
        title: "Advanced Search",
        description: "Quickly find specific health information with our powerful search capabilities."
      }
    ],
    'emergency': [
      {
        icon: <FiAlertCircle size={32} />,
        title: "Emergency QR Access",
        description: "Emergency responders can access vital information via a unique QR code even when you're unconscious."
      },
      {
        icon: <FiClock size={32} />,
        title: "One-Tap Emergency Alert",
        description: "Send your location and medical status to emergency contacts and nearby services with a single tap."
      },
      {
        icon: <FiMap size={32} />,
        title: "Nearest Hospital Locator",
        description: "Automatically identifies the closest emergency facilities based on your current location."
      },
      {
        icon: <MdMedication size={32} />,
        title: "Critical Information Display",
        description: "Shows allergies, medications, and critical conditions first during emergencies."
      },
      {
        icon: <FiActivity size={32} />,
        title: "Paramedic Mode",
        description: "Special interface for first responders to quickly access the most relevant emergency information."
      },
      {
        icon: <FiPhone size={32} />,
        title: "Emergency Contact Chain",
        description: "Automatically notifies your emergency contacts in sequence until someone responds."
      }
    ],
    'security': [
      {
        icon: <FiLock size={32} />,
        title: "End-to-End Encryption",
        description: "Your medical data is encrypted from the moment it's created until you access it - no one else can read it."
      },
      {
        icon: <FiFingerprint size={32} />,
        title: "Biometric Authentication",
        description: "Secure access using fingerprint, face recognition, or other biometric methods you already use."
      },
      {
        icon: <FiSearch size={32} />,
        title: "Activity Audit Trail",
        description: "See exactly who accessed your records, when, and what they viewed with detailed logs."
      },
      {
        icon: <FiLock size={32} />,
        title: "Granular Access Control",
        description: "Specify exactly which information different healthcare providers can access and for how long."
      },
      {
        icon: <FiClock size={32} />,
        title: "Time-Limited Access",
        description: "Grant temporary access to medical professionals that automatically expires after your visit."
      },
      {
        icon: <FiShield size={32} />,
        title: "HIPAA Compliant",
        description: "Platform meets or exceeds all healthcare privacy standards and regulations."
      }
    ],
    'integration': [
      {
        icon: <MdOutlineHospital size={32} />,
        title: "Hospital Systems Integration",
        description: "Seamlessly connects with major hospital and clinic electronic health record systems."
      },
      {
        icon: <MdOutlineScience size={32} />,
        title: "Lab Results Integration",
        description: "Automatically imports lab results from partner laboratories and testing facilities."
      },
      {
        icon: <MdOutlineWatch size={32} />,
        title: "Wearable Device Sync",
        description: "Connects with popular health devices to incorporate heart rate, activity, and other metrics."
      },
      {
        icon: <MdMedication size={32} />,
        title: "Pharmacy Connection",
        description: "Links to pharmacy systems for medication history and prescription tracking."
      },
      {
        icon: <MdOutlineBiotech size={32} />,
        title: "Genetic Testing Integration",
        description: "Import and store genetic testing results with specialized visualization tools."
      },
      {
        icon: <FiCalendar size={32} />,
        title: "Appointment Scheduling",
        description: "Schedule appointments directly with healthcare providers through the app."
      }
    ],
    'family': [
      {
        icon: <MdFamilyRestroom size={32} />,
        title: "Family Health Profiles",
        description: "Manage the health information of family members from a single dashboard with appropriate consent."
      },
      {
        icon: <MdChildCare size={32} />,
        title: "Child Health Tracking",
        description: "Special features for tracking child development, vaccinations, and growth milestones."
      },
      {
        icon: <MdOutlineElderlyWoman size={32} />,
        title: "Elder Care Management",
        description: "Tools designed specifically for managing care for elderly family members."
      },
      {
        icon: <MdOutlineHandshake size={32} />,
        title: "Caregiver Access",
        description: "Grant limited access to caregivers while maintaining overall privacy and control."
      },
      {
        icon: <FiClipboard size={32} />,
        title: "Shared Family History",
        description: "Build a comprehensive family medical history to better understand hereditary risks."
      },
      {
        icon: <FiMessageSquare size={32} />,
        title: "Family Messaging",
        description: "Secure communication tools for discussing health matters with family members."
      }
    ]
  };

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="features-hero">
        <div className="container">
          <h1 className={`features-title ${isVisible ? 'animate-fade-in-up' : ''}`}>
            Powerful Features for Complete Health Management
          </h1>
          <p className={`features-subtitle ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '200ms' }}>
            Discover how RapidAid combines security, accessibility, and innovation to revolutionize medical record management and emergency response
          </p>
        </div>
        <div className="animated-shapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="features-tabs-section">
        <div className="container">
          <div className="features-tabs">
            <FeatureTab 
              id="health-records" 
              title="Health Records" 
              isActive={activeTab === 'health-records'} 
              onClick={setActiveTab} 
            />
            <FeatureTab 
              id="emergency" 
              title="Emergency Response" 
              isActive={activeTab === 'emergency'} 
              onClick={setActiveTab} 
            />
            <FeatureTab 
              id="security" 
              title="Privacy & Security" 
              isActive={activeTab === 'security'} 
              onClick={setActiveTab} 
            />
            <FeatureTab 
              id="integration" 
              title="Integrations" 
              isActive={activeTab === 'integration'} 
              onClick={setActiveTab} 
            />
            <FeatureTab 
              id="family" 
              title="Family Care" 
              isActive={activeTab === 'family'} 
              onClick={setActiveTab} 
            />
          </div>

          <div className="features-content">
            <div className="features-grid">
              {featuresData[activeTab].map((feature, index) => (
                <FeatureCard 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 100}
                  isVisible={true}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Spotlight Section */}
      <section className="feature-spotlight scroll-reveal">
        <div className="container">
          <div className="spotlight-content">
            <div className="spotlight-text">
              <h2>Emergency Access When Every Second Counts</h2>
              <p>
                In critical situations, medical professionals need immediate access to your vital health information. 
                Our Emergency Access feature provides a secure way for emergency responders to view life-saving information
                even when you're unable to unlock your phone.
              </p>
              <ul className="spotlight-features">
                <li>
                  <span className="check">✓</span>
                  QR code emergency access on lock screen
                </li>
                <li>
                  <span className="check">✓</span>
                  Time-limited access for emergency personnel
                </li>
                <li>
                  <span className="check">✓</span>
                  Shows only critical information first
                </li>
                <li>
                  <span className="check">✓</span>
                  Complete audit trail of emergency access
                </li>
              </ul>
              <a href="/emergency" className="btn btn-primary">Learn More About Emergency Access</a>
            </div>
            <div className="spotlight-image">
              <div className="image-container">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="emergency-screen">
                      <div className="emergency-header">
                        <span className="emergency-icon">🚨</span>
                        <h3>EMERGENCY ACCESS</h3>
                      </div>
                      <div className="emergency-content">
                        <div className="patient-info">
                          <div className="patient-name">John Doe</div>
                          <div className="patient-details">
                            <span>43 years old</span>
                            <span>•</span>
                            <span>Male</span>
                            <span>•</span>
                            <span>A+</span>
                          </div>
                        </div>
                        <div className="critical-info">
                          <h4>CRITICAL INFORMATION</h4>
                          <ul>
                            <li>Allergic to Penicillin</li>
                            <li>Cardiac Pacemaker</li>
                            <li>Type 1 Diabetes</li>
                            <li>Taking Warfarin (Blood Thinner)</li>
                          </ul>
                        </div>
                        <div className="emergency-contacts">
                          <h4>EMERGENCY CONTACTS</h4>
                          <div className="contact">
                            <div>Jane Doe (Wife)</div>
                            <div>+1 (555) 123-4567</div>
                          </div>
                        </div>
                      </div>
                      <div className="time-limited">
                        <div className="timer">Access expires in: 28:42</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Compares Section */}
      <section className="features-comparison scroll-reveal">
        <div className="container">
          <h2>How RapidAid Compares</h2>
          <p>See why healthcare professionals and patients choose RapidAid over traditional solutions</p>
          
          <div className="comparison-table-container">
            <div className="comparison-table">
              <div className="table-header">
                <div className="feature-column">Feature</div>
                <div className="rapidaid-column">RapidAid</div>
                <div className="traditional-column">Traditional EMR</div>
                <div className="paper-column">Paper Records</div>
              </div>
              
              <div className="table-row">
                <div className="feature-column">Emergency Access</div>
                <div className="rapidaid-column"><span className="check">✓</span> Instant via QR</div>
                <div className="traditional-column"><span className="partial">△</span> Limited</div>
                <div className="paper-column"><span className="no">✗</span> Unavailable</div>
              </div>
              
              <div className="table-row">
                <div className="feature-column">Patient Control</div>
                <div className="rapidaid-column"><span className="check">✓</span> Complete</div>
                <div className="traditional-column"><span className="no">✗</span> Minimal</div>
                <div className="paper-column"><span className="no">✗</span> None</div>
              </div>
              
              <div className="table-row">
                <div className="feature-column">Accessibility</div>
                <div className="rapidaid-column"><span className="check">✓</span> Anywhere, Anytime</div>
                <div className="traditional-column"><span className="partial">△</span> Within Network</div>
                <div className="paper-column"><span className="no">✗</span> Physical Only</div>
              </div>
              
              <div className="table-row">
                <div className="feature-column">Family Management</div>
                <div className="rapidaid-column"><span className="check">✓</span> Integrated</div>
                <div className="traditional-column"><span className="partial">△</span> Limited</div>
                <div className="paper-column"><span className="partial">△</span> Manual</div>
              </div>
              
              <div className="table-row">
                <div className="feature-column">Security</div>
                <div className="rapidaid-column"><span className="check">✓</span> End-to-End Encryption</div>
                <div className="traditional-column"><span className="partial">△</span> Variable</div>
                <div className="paper-column"><span className="no">✗</span> Physical Only</div>
              </div>
              
              <div className="table-row">
                <div className="feature-column">Real-time Updates</div>
                <div className="rapidaid-column"><span className="check">✓</span> Instant</div>
                <div className="traditional-column"><span className="partial">△</span> Delayed</div>
                <div className="paper-column"><span className="no">✗</span> Manual Only</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section scroll-reveal">
        <div className="container">
          <h2>What Our Users Say</h2>
          <div className="testimonials-container">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"RapidAid literally saved my life. When I had a severe allergic reaction, EMTs scanned my phone and immediately knew what medications to avoid. The emergency access feature works exactly as promised."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <div className="avatar-placeholder">SK</div>
                </div>
                <div className="author-info">
                  <div className="author-name">Sarah K.</div>
                  <div className="author-title">Patient</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"As an emergency physician, I've seen RapidAid make a critical difference in treatment decisions. Having instant access to a patient's medical history and medication list helps us provide safer, faster care."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <div className="avatar-placeholder">DM</div>
                </div>
                <div className="author-info">
                  <div className="author-name">Dr. Michael T.</div>
                  <div className="author-title">Emergency Medicine</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Managing healthcare for my three children and elderly parents used to be overwhelming. RapidAid's family management features keep everything organized and accessible. It's been a game-changer for our family."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <div className="avatar-placeholder">JD</div>
                </div>
                <div className="author-info">
                  <div className="author-name">Jennifer D.</div>
                  <div className="author-title">Family Caregiver</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta scroll-reveal">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to take control of your health information?</h2>
            <p>Join thousands of people who trust RapidAid for secure, accessible healthcare management</p>
            <div className="cta-buttons">
              <a href="/signup" className="btn btn-primary">Get Started Now</a>
              <a href="/demo" className="btn btn-outline">Request a Demo</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 