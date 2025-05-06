'use client';

import {
  FiFileText,
  FiAlertTriangle,
  FiLock,
  FiUsers,
  FiMapPin,
  FiClock
} from 'react-icons/fi';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content gradient-border">
          <h1>
            <span>Digital Health</span> <span>Records for</span> <span>Emergency Response</span>
          </h1>
          <p className="animated-text">RapidAid provides secure access to critical health information during emergencies. Our platform connects doctors, patients, and emergency responders to save lives when every second counts.</p>
          <div className="cta-buttons">
            <a href="/get-started" className="btn btn-primary animated-btn">Get Started →</a>
            <a href="/how-it-works" className="btn btn-outline animated-btn">How It Works</a>
          </div>
          <div className="medical-pulse"></div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-section">
        <div style={{ padding: '2rem 0', textAlign: 'center' }}>
          <p>Trusted by 2,000+ healthcare professionals</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="shiny-text">Powerful Features for Complete Health Management</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>RapidAid combines security, accessibility, and emergency response in one comprehensive platform</p>
          
          <div className="features-grid">
            <div className="feature-box gradient-border">
              <div className="feature-icon">
                <FiFileText size={28} />
              </div>
              <h3>Comprehensive Health Records</h3>
              <p>Store your complete medical history, test results, and treatments in one secure location with military-grade encryption.</p>
            </div>
            
            <div className="feature-box gradient-border">
              <div className="feature-icon">
                <FiAlertTriangle size={28} />
              </div>
              <h3>Mobile Access Anywhere</h3>
              <p>Access your medical records anytime, anywhere from any device with our responsive platform.</p>
            </div>
            
            <div className="feature-box gradient-border">
              <div className="feature-icon">
                <FiLock size={28} />
              </div>
              <h3>Real-time Updates</h3>
              <p>Doctors can update your records in real-time, ensuring you always have the most current information.</p>
            </div>
            
            <div className="feature-box gradient-border">
              <div className="feature-icon">
                <FiUsers size={28} />
              </div>
              <h3>Health Analytics</h3>
              <p>Visual dashboards track your health metrics over time, helping you spot trends and take proactive measures.</p>
            </div>
            
            <div className="feature-box gradient-border">
              <div className="feature-icon">
                <FiMapPin size={28} />
              </div>
              <h3>Custom Health Notes</h3>
              <p>Add your own notes and observations to complement professional medical records.</p>
            </div>
            
            <div className="feature-box gradient-border">
              <div className="feature-icon">
                <FiClock size={28} />
              </div>
              <h3>Advanced Search</h3>
              <p>Quickly find specific health information with our powerful search capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="shiny-text">How RapidAid Works</h2>
          <p>Fast, secure, and simple access to medical information when it matters most</p>
          
          <div className="steps">
            <div className="step gradient-border">
              <div className="step-number">1</div>
              <h3>Register as Patient, Doctor or Staff</h3>
              <p>Create your secure account with role-based access and complete your profile.</p>
            </div>
            
            <div className="step gradient-border">
              <div className="step-number">2</div>
              <h3>Add Your Medical Information</h3>
              <p>Input your health data, upload documents, and set emergency contacts.</p>
            </div>
            
            <div className="step gradient-border">
              <div className="step-number">3</div>
              <h3>Access Anytime, Anywhere</h3>
              <p>Your data is securely available on all your devices, plus emergency responder access.</p>
            </div>
          </div>
          
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <a href="/register" className="btn btn-primary animated-btn">Register Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
