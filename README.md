🚀 InsiderJobs – Full Stack Job Portal Application
InsiderJobs is a full-stack Job Portal Application designed to connect job seekers and employers through a seamless, real-world hiring platform.
It supports job discovery, applications, recruiter dashboards, and backend job management, built with a clear client–server architecture.
🌐 Live Demo: https://jobs-insider.vercel.app
💼 Production-ready | Resume-worthy | Real-world use case


🚀 Overview
The application provides:
A client-side interface for job searching, filtering, and applying
A server-side system for managing users, companies, and job listings
Secure authentication and file uploads (e.g., resumes)
Clean separation between frontend (React) and backend (Node.js / Express)


🌟 Key Features
👩‍💻 Job Seekers
User authentication (Sign up / Login)
Browse latest job listings
Filter jobs by category, location, and experience level
View detailed job descriptions
Apply for jobs
Track applied jobs

👨‍💼 Recruiters / Companies
Recruiter authentication
Create and manage company profiles
Post new job openings
Manage job visibility (show/hide jobs)
View applicant count per job
Recruiter dashboard for job management

📂 File Uploads
Resume and file uploads using Multer
Multipart/form-data handling for applications

🔐 Security & Monitoring
Role-based access control
Environment-based configuration
Error monitoring using Sentry


🛠️ Tech Stack
Client-Side (Frontend)
React
Vite
Tailwind CSS
JavaScript
React Router
Server-Side (Backend)
Node.js
Express.js
MongoDB
Mongoose
Multer (file uploads)
dotenv (environment variables)
Clerk Authentication
Cloudinary (media storage)
Sentry (error tracking)


🧱 Project Structure
Backend
server/
├── config/
│   ├── db.js
│   ├── cloudinary.js
│   └── instrument.js
├── controllers/
│   ├── webhooks.js
│   ├── jobController.js
│   ├── companyController.js
│   └── userController.js
├── routes/
│   ├── jobRoutes.js
│   ├── companyRoutes.js
│   └── userRoutes.js
├── models/
│   ├── Job.js
│   ├── Company.js
│   └── User.js
├── multer.js
├── server.js
└── .env

Frontend
client/
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   └── ...
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js
└── tailwind.config.js


⚙️ Environment Variables
Create a .env file in the backend directory:
PORT=5001
MONGO_URI=your_mongodb_uri
CLERK_SECRET_KEY=your_clerk_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SENTRY_DSN=your_sentry_dsn


▶️ Run the Project Locally
Backend
cd server
npm install
npm run dev
Frontend
cd client
npm install
npm run dev


🧠 What This Project Demonstrates
Full-stack application design
REST API development with Express
MongoDB data modeling with Mongoose
Secure authentication & role management
File uploads using Multer
Clean frontend–backend separation
Real-world CRUD workflows
Production-ready error handling


🚀 Future Enhancements
Resume parsing & ranking
ML-based job recommendations
Admin analytics dashboard
Email notifications
Saved jobs & alerts


👩‍💻 Author
Tamanna
📧 Email: tamanna.agy@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/tamanna-136335293/
💻 GitHub: https://github.com/tamannaaa25
🌐 Live App: https://jobs-insider.vercel.app
⭐ If you like this project, don’t forget to star the repository!
