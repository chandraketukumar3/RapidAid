'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import './how-it-works.css';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const timelineRef = useRef(null);
  const [touchStartY, setTouchStartY] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      // Scroll reveal animations
      const scrollElements = document.querySelectorAll('.scroll-reveal');
      scrollElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });

      // Staggered animations for journey events
      const journeyEvents = document.querySelectorAll('.journey-event');
      journeyEvents.forEach((event, index) => {
        const elementTop = event.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          setTimeout(() => {
            event.classList.add('active');
          }, index * 200); // Stagger the animations
        }
      });

      // Activate timeline when in view
      if (timelineRef.current) {
        const timelineTop = timelineRef.current.getBoundingClientRect().top;
        if (timelineTop < window.innerHeight - 150) {
          timelineRef.current.classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on first load
    
    // Auto-play video when it comes into view
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      });
    }, options);
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  
  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  // Touch gesture handlers for swiping through steps
  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;
    
    // If swipe is significant enough
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeStep < steps.length) {
        // Swipe up - next step
        setActiveStep(activeStep + 1);
      } else if (diff < 0 && activeStep > 1) {
        // Swipe down - previous step
        setActiveStep(activeStep - 1);
      }
    }
  };

  // Add ripple effect on touch
  const createRipple = (event) => {
    const button = event.currentTarget;
    
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
    
    const ripple = button.getElementsByClassName("ripple")[0];
    
    if (ripple) {
      ripple.remove();
    }
    
    button.appendChild(circle);
  };
  
  const steps = [
    {
      number: 1,
      title: "Create Your Secure Account",
      description: "Sign up for RapidAid in minutes with our secure, user-friendly registration process. Choose your role as a patient, doctor, or caregiver and verify your identity to ensure maximum security.",
      icon: "👤",
      features: [
        "Quick, streamlined registration process",
        "Multiple user roles with appropriate permissions",
        "Multi-factor authentication for enhanced security",
        "Data encrypted from day one"
      ]
    },
    {
      number: 2,
      title: "Input Your Health Information",
      description: "Add your medical history, current medications, allergies, and emergency contacts. Upload documents and scan prescriptions to build your comprehensive health profile.",
      icon: "📋",
      features: [
        "Intuitive forms for easy data entry",
        "Document scanning and automatic categorization",
        "Prescription management system",
        "Emergency contact designation"
      ]
    },
    {
      number: 3,
      title: "Connect With Healthcare Providers",
      description: "Link your profile with your doctors, specialists, and healthcare facilities. Grant them appropriate access to your records to ensure seamless care coordination.",
      icon: "🏥",
      features: [
        "QR code linking for in-person appointments",
        "Search and connect with healthcare providers",
        "Custom permission settings for each provider",
        "Time-limited access controls"
      ]
    },
    {
      number: 4,
      title: "Setup Emergency Access",
      description: "Configure your emergency settings to allow first responders quick access to vital information when every second counts, while maintaining your privacy under normal circumstances.",
      icon: "🚨",
      features: [
        "Lock screen emergency access QR code",
        "Critical information prioritization",
        "Automatic notifications to emergency contacts",
        "Complete access audit trail"
      ]
    },
    {
      number: 5,
      title: "Stay Healthy With Ongoing Support",
      description: "Use RapidAid daily to track your health, receive medication reminders, share updates with your care team, and maintain control of your complete health record.",
      icon: "❤️",
      features: [
        "Medication reminders and adherence tracking",
        "Health metrics visualization and trends",
        "Secure messaging with your healthcare team",
        "Appointment scheduling and reminders"
      ]
    }
  ];

  return (
    <div className="how-it-works-page">
      {/* Hero Section */}
      <section className="how-hero">
        <div className="container">
          <h1 className={`how-title ${isVisible ? 'animate-fade-in-up' : ''}`}>
            How RapidAid Works
          </h1>
          <p className={`how-subtitle ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '200ms' }}>
            Discover how our powerful platform puts your health information at your fingertips while ensuring it's available when and where it's needed most
          </p>
          
          <div className={`workflow-visualization touch-effect hover-glow ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '400ms' }}>
            <div className="workflow-graphic">
              <div className="workflow-icon-container">
                <div className="workflow-icon user-icon touch-effect" onClick={() => handleStepClick(1)}>👤</div>
                <div className="workflow-icon arrow">→</div>
                <div className="workflow-icon data-icon touch-effect" onClick={() => handleStepClick(2)}>📱</div>
                <div className="workflow-icon arrow">→</div>
                <div className="workflow-icon security-icon touch-effect" onClick={() => handleStepClick(3)}>🔒</div>
                <div className="workflow-icon arrow">→</div>
                <div className="workflow-icon emergency-icon touch-effect" onClick={() => handleStepClick(4)}>🚨</div>
                <div className="workflow-icon arrow">→</div>
                <div className="workflow-icon health-icon touch-effect" onClick={() => handleStepClick(5)}>❤️</div>
              </div>
              <div className="workflow-labels">
                <div className="workflow-label">Sign Up</div>
                <div className="workflow-label">Add Data</div>
                <div className="workflow-label">Secure</div>
                <div className="workflow-label">Emergency</div>
                <div className="workflow-label">Health</div>
              </div>
            </div>
          </div>
        </div>
        <div className="animated-circles">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
        </div>
      </section>

      {/* Main Process Section */}
      <section className="process-section scroll-reveal">
        <div className="container">
          <div className="process-header">
            <h2>5 Simple Steps to Better Health Management</h2>
            <p>RapidAid streamlines the way you manage, access, and share your health information</p>
          </div>
          
          <div className="interactive-process">
            <div className="process-navigation">
              {steps.map((step) => (
                <div 
                  key={step.number}
                  className={`process-nav-item touch-effect ${activeStep === step.number ? 'active' : ''}`}
                  onClick={(e) => {
                    handleStepClick(step.number);
                    createRipple(e);
                  }}
                >
                  <div className="step-number">{step.number}</div>
                  <div className="step-label">{step.title}</div>
                </div>
              ))}
            </div>
            
            <div 
              className="process-content" 
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {steps.map((step) => (
                <div 
                  key={step.number} 
                  className={`process-step ${activeStep === step.number ? 'active' : ''}`}
                >
                  <div className="step-icon touch-effect">{step.icon}</div>
                  <div className="step-details">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <ul className="step-features">
                      {step.features.map((feature, index) => (
                        <li key={index} className="staggered-item" style={{ transitionDelay: `${index * 100}ms` }}>
                          <span className="feature-bullet">•</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="step-illustration">
                    <div className={`illustration-container step-${step.number} touch-effect hover-glow`}>
                      <div className="illustration-device">
                        <div className="device-screen">
                          <div className={`screen-content screen-${step.number}`}>
                            <div className="animated-elements"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="video-demo-section scroll-reveal">
        <div className="container">
          <div className="video-content">
            <div className="video-text">
              <h2>See RapidAid in Action</h2>
              <p>
                Watch how RapidAid works in real-world scenarios, from routine doctor visits to emergency situations.
                Our platform adapts to your needs, ensuring your critical health information is both secure and accessible.
              </p>
              <div className="video-features">
                <div className="video-feature touch-effect">
                  <div className="feature-icon">⏱️</div>
                  <div className="feature-text">
                    <h4>Fast Emergency Access</h4>
                    <p>Vital information available to first responders in seconds</p>
                  </div>
                </div>
                <div className="video-feature touch-effect">
                  <div className="feature-icon">🔐</div>
                  <div className="feature-text">
                    <h4>Privacy By Design</h4>
                    <p>You control who sees what information and when</p>
                  </div>
                </div>
                <div className="video-feature touch-effect">
                  <div className="feature-icon">📲</div>
                  <div className="feature-text">
                    <h4>Cross-Platform</h4>
                    <p>Works seamlessly across all your devices</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="video-container">
              <div className="video-wrapper touch-effect hover-glow">
                <div className="video-placeholder">
                  <div className="play-button">
                    <div className="play-icon">▶</div>
                  </div>
                  <p>RapidAid Emergency Response Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="user-journey-section scroll-reveal">
        <div className="container">
          <h2>Your RapidAid Journey</h2>
          <p className="section-subtitle">Follow the path of a typical RapidAid user from signup to emergency care</p>
          
          <div className="journey-timeline" ref={timelineRef}>
            <div className="timeline-track"></div>
            
            <div className="journey-event">
              <div className="event-dot"></div>
              <div className="event-content touch-effect hover-glow">
                <div className="event-icon">📝</div>
                <h3>Day 1: Sign Up</h3>
                <p>Meet Sarah, who downloads RapidAid after her doctor recommends it. She completes the secure signup process in under 5 minutes and verifies her identity.</p>
              </div>
            </div>
            
            <div className="journey-event">
              <div className="event-dot"></div>
              <div className="event-content right touch-effect hover-glow">
                <div className="event-icon">📋</div>
                <h3>Day 2: Profile Setup</h3>
                <p>Sarah enters her basic health information, medications, and allergies. She scans and uploads her recent lab results and adds her family doctor as a connected provider.</p>
              </div>
            </div>
            
            <div className="journey-event">
              <div className="event-dot"></div>
              <div className="event-content touch-effect hover-glow">
                <div className="event-icon">👪</div>
                <h3>Week 1: Family Access</h3>
                <p>Sarah adds her husband as a family member with limited access to her records and designates him as an emergency contact who can grant consent in emergencies.</p>
              </div>
            </div>
            
            <div className="journey-event">
              <div className="event-dot"></div>
              <div className="event-content right touch-effect hover-glow">
                <div className="event-icon">🏥</div>
                <h3>Month 1: Specialist Visit</h3>
                <p>At her cardiologist appointment, Sarah shares her heart-related records with a simple QR code scan. The doctor adds notes that automatically appear in her RapidAid profile.</p>
              </div>
            </div>
            
            <div className="journey-event">
              <div className="event-dot"></div>
              <div className="event-content touch-effect hover-glow">
                <div className="event-icon">💊</div>
                <h3>Month 3: Medication Management</h3>
                <p>Sarah uses RapidAid daily for medication reminders. The app tracks her adherence and vitals, creating trends her doctor can review at her next appointment.</p>
              </div>
            </div>
            
            <div className="journey-event">
              <div className="event-dot"></div>
              <div className="event-content right emergency-event touch-effect hover-glow">
                <div className="event-icon">🚨</div>
                <h3>Month 6: Emergency Response</h3>
                <p>Sarah experiences an allergic reaction while traveling. EMTs scan her emergency QR code and immediately see her allergies and current medications, providing appropriate treatment quickly.</p>
              </div>
            </div>
            
            <div className="journey-event">
              <div className="event-dot"></div>
              <div className="event-content final-event touch-effect hover-glow">
                <div className="event-icon">❤️</div>
                <h3>Ongoing: Better Health Management</h3>
                <p>With all her health information in one place, Sarah experiences better coordinated care, fewer medical errors, and peace of mind knowing her information is accessible in emergencies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section scroll-reveal">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item touch-effect">
              <h3>Is my medical data secure with RapidAid?</h3>
              <p>Absolutely. RapidAid uses military-grade encryption and security protocols that meet or exceed HIPAA requirements. Your data is encrypted both at rest and in transit, and you control exactly who can access it.</p>
            </div>
            
            <div className="faq-item touch-effect">
              <h3>How does emergency access work if I'm unconscious?</h3>
              <p>Emergency responders can scan the QR code available from your phone's lock screen. This provides time-limited access only to critical information like allergies, medications, and emergency contacts — not your full medical history.</p>
            </div>
            
            <div className="faq-item touch-effect">
              <h3>Can I use RapidAid if my doctor doesn't?</h3>
              <p>Yes! Even if your providers don't use RapidAid directly, you can still manage your own health records, and use the emergency access features. You can also print or share PDFs of your health information.</p>
            </div>
            
            <div className="faq-item touch-effect">
              <h3>What happens if I lose my phone?</h3>
              <p>Your data is stored securely in the cloud, not just on your device. Simply download RapidAid on your new device, log in, and all your information will be there. You can also remotely deactivate emergency access for your lost device.</p>
            </div>
            
            <div className="faq-item touch-effect">
              <h3>Can I add family members to my account?</h3>
              <p>Yes, RapidAid allows you to create and manage profiles for family members, making it perfect for parents with children or those caring for elderly relatives. Each profile maintains separate privacy controls.</p>
            </div>
            
            <div className="faq-item touch-effect">
              <h3>Does RapidAid work internationally?</h3>
              <p>Yes, RapidAid works anywhere you have internet access. Emergency access functions even offline, and the interface is available in multiple languages to help healthcare providers worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="how-testimonials-section scroll-reveal">
        <div className="container">
          <h2>Real Users, Real Results</h2>
          <div className="testimonials-slider">
            <div className="testimonial-slide touch-effect hover-glow active">
              <div className="testimonial-content">
                <div className="testimonial-quote">
                  <p>"As an emergency physician, RapidAid has transformed how I treat patients in critical situations. Having instant access to allergies and medications has prevented potentially fatal errors. The time-limited access respects patient privacy while giving us the information we need."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-image doctor-image"></div>
                  <div className="author-info">
                    <h4>Dr. James Chen</h4>
                    <p>Emergency Medicine, Boston General Hospital</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="get-started-section scroll-reveal">
        <div className="container">
          <div className="start-content">
            <h2>Ready to Take Control of Your Health?</h2>
            <p>Join thousands of users who trust RapidAid for their health management and emergency preparedness</p>
            
            <div className="start-steps">
              <div className="start-step touch-effect">
                <div className="step-circle">1</div>
                <p>Download the app</p>
              </div>
              <div className="start-arrow">→</div>
              <div className="start-step touch-effect">
                <div className="step-circle">2</div>
                <p>Create your profile</p>
              </div>
              <div className="start-arrow">→</div>
              <div className="start-step touch-effect">
                <div className="step-circle">3</div>
                <p>Add your information</p>
              </div>
            </div>
            
            <div className="cta-buttons">
              <a href="/signup" className="btn btn-primary touch-effect">Get Started Now</a>
              <a href="/contact" className="btn btn-outline touch-effect">Contact Our Team</a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .ripple {
          position: absolute;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
} 