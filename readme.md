# Agent List Distribution App

A web application that allows an admin to upload a CSV file containing user data and automatically distributes the records evenly among 5 agents. The admin can also view the distributed lists assigned to each agent in a clean, responsive UI.

## 🚀 Features

- ✅ Secure admin authentication
- ✅ CSV upload with First Name, Phone, and Notes
- ✅ Automatic round-robin distribution to 5 agents
- ✅ View distributed lists per agent
- ✅ Built with MERN Stack (MongoDB, Express, React, Node.js)

## 📁 Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Auth:** JWT + HTTP-only cookies
- **File Handling:** Multer + XLSX
- **State Management:** Zustand

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/agent-distribution-app.git
cd agent-distribution-app
2. Install Dependencies
Backend
bash
Copy
Edit
cd backend
npm install

Frontend
bash
Copy
Edit
cd ../frontend
npm install
3. Create Environment Variables
Backend - .env
env
Copy
Edit
PORT=5001
MONGO_URI=mongodb://localhost:27017/agent-distribution
JWT_SECRET=your_jwt_secret
4. Start the Application
Backend
bash
Copy
Edit
cd backend
npm run dev
Frontend
bash
Copy
Edit
cd frontend
npm start
📂 Folder Structure
pgsql
Copy
Edit
backend/
│
├── controllers/
├── middleware/
├── models/
├── routes/
└── server.js

frontend/
│
├── components/
├── pages/
├── store/
└── App.jsx
📌 Usage
Log in as admin.

Add 5 agents using the Agent Form.

Upload a CSV file with at least 25 entries.

View the distributed data assigned to each agent.

📄 Sample CSV Format
csv
Copy
Edit
FirstName,Phone,Notes
John,1234567890,Test Note 1
Jane,9876543210,Test Note 2
...