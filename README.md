# RapidAid - Digital Health Record & Emergency Response System

<div align="center">
  <h3>Secure digital health records with emergency access for healthcare professionals and patients</h3>
</div>

## 🧠 About RapidAid

RapidAid is a modern, secure, and responsive web application that enables:

- **Doctors and medical staff** to register, upload, and manage patients' medical records.
- **Patients** to securely access their data using biometric or pattern lock.
- **Emergency responders** to get instant access to life-saving medical data via QR code and location alerts.

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Next.js
- **Backend**: Node.js (Express.js)
- **Database**: PostgreSQL (via Prisma)
- **Storage**: Firebase Storage / AWS S3
- **Authentication**: Firebase Auth / Clerk
- **Notifications**: Firebase Cloud Messaging / Twilio
- **Location & Maps**: Google Maps API
- **QR Generator**: qrcode npm package
- **Animations**: Framer Motion
- **Security**: AES Encryption, Biometric Lock (via WebAuthn or fallback pattern-based login)

## ✨ Features

### 1. Authentication System
- Role-based access control (Patient, Doctor, Staff)
- Secure login/registration
- Biometric/Pattern authentication for patient portal

### 2. Dashboard System
- Role-specific dashboard views
- Medical record management
- Patient management (for doctors)
- Report uploads (for staff)

### 3. Emergency System
- QR code generation for emergency access
- Critical medical information snapshot
- Nearby ambulance locator
- One-touch emergency calling

### 4. Family Sharing
- Invite family members to view patient records
- Permission-based access control
- QR code sharing

### 5. Notifications
- Real-time alerts for emergencies
- New report uploads
- Appointment reminders

## 🚀 Getting Started

### Prerequisites
- Node.js (>=14.x)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/rapidaid.git
cd rapidaid
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
Create a `.env` file in the root directory with the following variables:
```env
# Database
DATABASE_URL=your_postgresql_connection_string

# Authentication - Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Storage - Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Maps - Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

4. Set up the database
```bash
npx prisma migrate dev
```

5. Run the development server
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Using the Application

### For Patients
1. Register as a patient
2. Complete your medical profile
3. Access your medical records
4. Generate emergency QR codes
5. Share access with family members

### For Doctors
1. Register as a doctor (requires verification)
2. Add patients to your care list
3. Upload and manage medical records
4. Receive emergency notifications

### For Medical Staff
1. Register as staff (requires verification)
2. Upload patient reports and documents
3. Manage patient information

### For Emergency Responders
1. Scan patient QR code in emergency situations
2. Get immediate access to critical medical information
3. View patient allergies, conditions, and emergency contacts

## 🔒 Privacy & Security

RapidAid takes data privacy and security seriously:

- End-to-end encryption for all medical data
- Role-based access control
- QR codes only reveal emergency-relevant information
- Regular security audits
- HIPAA-compliant data handling (in applicable regions)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

<div align="center">
  <p>RapidAid - Revolutionizing healthcare access through secure digital health records</p>
</div>
