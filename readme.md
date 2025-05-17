# Agent List Distribution App

A web application that allows an admin to upload a CSV file containing user data and automatically distributes the records evenly among 5 agents. The admin can view the distributed lists assigned to each agent in a clean, responsive user interface.

## 🚀 Features

- 🔒 Secure admin authentication
- 📤 CSV upload supporting First Name, Phone, and Notes
- 🔄 Automatic round-robin distribution to 5 agents
- 📋 View distributed lists per agent
- 🛠️ Built with the MERN Stack (MongoDB, Express, React, Node.js)

## 📚 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Axios, React Router
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT with HTTP-only cookies
- **File Handling**: Multer, XLSX
- **State Management**: Zustand

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/agent-distribution-app.git
cd agent-distribution-app
```

### 2. Install Dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../frontend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `backend` directory with the following content:

```env
PORT=5001
MONGO_URI=mongodb://localhost:27017/agent-distribution
JWT_SECRET=your_jwt_secret
```

### 4. Start the Application

#### Backend
```bash
cd backend
npm run dev
```

#### Frontend
```bash
cd frontend
npm start
```

## 📂 Project Structure

```
agent-distribution-app/
├── backend/
│   ├── controllers/
│   │   ├── agentController.js
│   │   ├── authController.js
│   │   └── listController.js
│   ├── middleware/
│   │   ├── agentMiddleware.js
│   │   ├── authMiddleware.js
│   │   └── listMiddleware.js
│   ├── models/
│   │   ├── agentModel.js
│   │   ├── authModel.js
│   │   └── listModel.js
│   ├── routes/
│   │   ├── agentRoutes.js
│   │   ├── authRoutes.js
│   │   └── listRoutes.js
│   └── index.js
├── frontend/
│   ├── components/
│   │   ├── AgentForm.jsx
│   │   ├── DistributedLists.jsx
│   │   ├── UploadForm.jsx
│   │   └── AuthImagePattern.jsx
│   ├── pages/
│   │   ├── Signup.jsx
│   │   ├── Login.jsx
│   │   └── Dashboard.jsx
│   ├── store/
│   │   └── useAuthStore.jsx
│   └── App.jsx
```

## 📝 Usage

1. Log in as an admin.
2. Add 5 agents using the Agent Form.
3. Upload a CSV file with at least 25 entries.
4. View the distributed data assigned to each agent.

## 📄 Sample CSV Format

```csv
FirstName,Phone,Notes
John,1234567890,Test Note 1
Jane,9876543210,Test Note 2
...
```
