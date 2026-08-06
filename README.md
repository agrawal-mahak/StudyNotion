# 🎓 StudyNotion - Ed-Tech Platform

StudyNotion is a fully functional, modern **Ed-Tech Platform** built on the MERN stack (MongoDB, Express.js, React.js, Node.js). It enables instructors to create, manage, and sell courses while providing students with an interactive learning platform to enroll, stream course content, track progress, and submit reviews.

---

## 🚀 Key Features

### 👨‍🎓 For Students
- **User Authentication**: Secure Signup/Login with OTP verification via email.
- **Browse & Search Courses**: Explore courses by categories, view details, and ratings.
- **Cart & Checkout**: Integrated payment processing via Razorpay.
- **Enrolled Courses Dashboard**: Track course completion progress, watch video lectures, and mark completed content.
- **Ratings & Reviews**: Rate courses and leave feedback.

### 👨‍🏫 For Instructors
- **Instructor Dashboard**: Overview of created courses, total students enrolled, and earnings analytics.
- **Course Builder**: Step-by-step creation of courses, sections, and video sub-sections.
- **Media Management**: Video and image uploads powered by Cloudinary.
- **Course Management**: Edit course content, publish or unpublish courses.

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: React.js (v18)
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Form Handling**: React Hook Form
- **Icons & Components**: React Icons, Swiper, Video-React, React Rating Stars

### **Backend**
- **Runtime**: Node.js & Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: JWT (JSON Web Tokens) & Bcrypt
- **Cloud Storage**: Cloudinary (Image & Video uploads)
- **Payments**: Razorpay API
- **Email Service**: Nodemailer (Gmail SMTP)

---

## 📁 Project Structure

```text
StudyNotion/
├── public/                 # Static assets & HTML template
├── src/                    # Frontend React application source code
│   ├── assets/             # Images, logos, and banners
│   ├── components/         # Reusable UI & Core components (Auth, Dashboard, Course, etc.)
│   ├── data/               # Static dataset & navbar links
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page views (Home, About, Dashboard, Catalog, CourseDetails)
│   ├── reducer/            # Redux Slices & store configuration
│   ├── services/           # API connectors & backend integration handlers
│   └── utils/              # Helper functions & constants
├── server/                 # Backend Node/Express API server
│   ├── config/             # Database, Cloudinary, and Razorpay configurations
│   ├── controllers/        # Route controllers (Auth, Course, Section, Payment, etc.)
│   ├── mail/               # Email templates (OTP, Password reset, Payment confirmation)
│   ├── middlewares/        # Authentication & Authorization middlewares
│   ├── models/             # Mongoose schemas (User, Course, Section, OTP, etc.)
│   ├── routes/             # Express API endpoints
│   ├── utils/              # Helper utilities (Image uploader, Mail sender)
│   ├── index.js            # Server entry point
│   ├── .env.example        # Server environment variables template
│   └── package.json        # Backend dependencies
├── .env.example            # Client environment variables template
├── .gitignore              # Git ignore rules for node_modules, .env, builds, etc.
├── package.json            # Root frontend package & concurrently runner
└── README.md               # Project documentation
```

---

## ⚙️ Environment Setup

### 1. Client Environment (`.env`)
Create a `.env` file in the root directory:
```env
REACT_APP_BASE_URL = http://localhost:4000/api/v1
```

### 2. Server Environment (`server/.env`)
Create a `.env` file inside the `server/` directory:
```env
PORT = 4000

# MongoDB Database URI (Local or Cloud Atlas)
MONGODB_URL = mongodb://127.0.0.1:27017/StudyNotion

# JWT Authentication Secret
JWT_SECRET = "your_jwt_secret"

# Nodemailer Configuration (Gmail SMTP)
MAIL_HOST = smtp.gmail.com
MAIL_USER = your_email@gmail.com
MAIL_PASS = your_gmail_app_password

# Cloudinary Storage Configuration
CLOUD_NAME = your_cloudinary_cloud_name
API_KEY = your_cloudinary_api_key
API_SECRET = your_cloudinary_api_secret

# Razorpay Payment Gateway Credentials
RAZORPAY_KEY = your_razorpay_key_id
RAZORPAY_SECRET = your_razorpay_secret

FOLDER_NAME = "CodeHelp"
```

---

## 🏁 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (running locally on port `27017` or a MongoDB Atlas URI)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/agrawal-mahak/StudyNotion.git
   cd StudyNotion
   ```

2. **Install Frontend Dependencies:**
   ```bash
   npm install
   ```

3. **Install Backend Dependencies:**
   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Start the Application:**
   Run both frontend client and backend server concurrently:
   ```bash
   npm run dev
   ```

5. **Access the App:**
   - **Frontend**: [http://localhost:3000](http://localhost:3000)
   - **Backend API**: [http://localhost:4000](http://localhost:4000)

---

## 📝 License

This project is open-source and available for educational purposes.
