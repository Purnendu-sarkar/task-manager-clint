# Task Management Application

🚀 **A simple and intuitive task management app with drag-and-drop functionality, real-time updates, and Firebase authentication.**  

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen)](https://task-manager-374f8.web.app)

---

## 📌 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Live Demo](#live-demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## 🔥 Overview
This is a **Task Management Application** where users can:
- Add, edit, delete, and reorder tasks.
- Drag and drop tasks between **To-Do, In Progress, and Done** categories.
- Save changes instantly to the database for persistence.
- Authenticate using **Firebase Google Sign-in**.
- Experience a fully responsive UI across desktop and mobile.

---

## 🎯 Features
✅ **User Authentication:** Google Sign-in via Firebase.  
✅ **Drag & Drop:** Move tasks between categories easily.  
✅ **Real-Time Sync:** Instantly save changes using MongoDB & Express.js.  
✅ **Modern UI:** Clean, minimalistic design with TailwindCSS & DaisyUI.  
✅ **Optimistic UI Updates:** Instant frontend updates before backend confirmation.  
✅ **Mobile Responsive:** Smooth experience on mobile & desktop.  
✅ **Dark Mode (Bonus Feature):** Toggle light/dark themes.  

---

## 🌐 Live Demo
🔗 [Try it Live](https://task-manager-374f8.web.app)  

---

## 🛠️ Technologies Used
### **Frontend** (React + Vite)
- **React 19** - UI Framework
- **Vite** - Fast build tool
- **TailwindCSS + DaisyUI** - Styling
- **React Beautiful DnD** - Drag & Drop  
- **React Router** - Client-side navigation  
- **Axios** - API Requests  
- **Firebase** - Authentication  

### **Backend** (Express + MongoDB)
- **Express.js** - Server Framework  
- **MongoDB** - Database  
- **Mongoose** - ODM for MongoDB  
- **Cors & dotenv** - Environment configuration  

---

## ⚙️ Installation
### Prerequisites
Ensure you have **Node.js** and **MongoDB** installed on your machine.

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/Purnendu-sarkar/task-manager-clint.git
cd task-manager-clint

### 2️⃣ Install Dependencies
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

##3️⃣ Set Up Environment Variables
#Create a .env.local file in the frontend folder and a .env file in backend with the following:

VITE_apiKey=your-firebase-api-key
VITE_authDomain=your-firebase-auth-domain
VITE_projectId=your-firebase-project-id
VITE_storageBucket=your-firebase-storage-bucket
VITE_messagingSenderId=your-firebase-messaging-sender-id
VITE_appId=your-firebase-app-id
VITE_API_URL=http://localhost:5000


###4️⃣ Run the Application
# Start frontend
npm run dev


## 📜 License

This project is licensed under the **MIT License**.

---

✅ **Maintained by:** Purnendu Sarkar  
💡 *Feel free to reach out for feedback or collaboration!* 🚀




