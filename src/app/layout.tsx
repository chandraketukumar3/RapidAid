import type { Metadata } from "next";
import "./globals.css";
import { Outfit, Raleway, Inter } from 'next/font/google';
import { FaUserMd, FaHeartbeat, FaHospitalSymbol, FaUserNurse } from 'react-icons/fa';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
});

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-raleway',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "RapidAid - Digital Health Record & Emergency Response System",
  description: "Secure digital health records with emergency access for healthcare professionals and patients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${raleway.variable} ${inter.variable}`}>
      <body>
        {/* Background Video with Dark Overlay */}
        <div className="bg-video-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="bg-video"
            src="/health-bg.mp4.mp4"
            preload="auto"
          ></video>
          {/* Dark overlay is added via CSS ::after pseudo-element */}
        </div>

        <header className="rapidaid-header">
          <div className="logo">RapidAid</div>
          <nav className="nav-links">
            <a href="/">Home</a>
            <a href="/features">Features</a>
            <a href="/how-it-works">How It Works</a>
            <a href="/contact">Contact</a>
          </nav>
          <div className="auth-buttons">
            <a href="/login" className="auth-btn login-btn">
              <FaUserMd className="auth-icon" />
              <span>Log In</span>
            </a>
            <a href="/signup" className="auth-btn signup-btn">
              <FaUserNurse className="auth-icon" />
              <span>Sign Up</span>
            </a>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <div className="container">
            <div className="footer-content">
              <div className="footer-column">
                <h3>RapidAid</h3>
                <p>Your health, your data, your safety.</p>
              </div>
              <div className="footer-column">
                <h3>Quick Links</h3>
                <ul className="footer-links">
                  <li><a href="/">Home</a></li>
                  <li><a href="/features">Features</a></li>
                  <li><a href="/how-it-works">How It Works</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Contact</h3>
                <p>Email: info@rapidaid.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </div>
            <div className="copyright">
              © {new Date().getFullYear()} RapidAid. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
