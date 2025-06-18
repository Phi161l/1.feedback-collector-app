# feedback-collector-app

## 🚀 Features

- Users can submit feedback (name, email, message)  
- Admins can view all submitted feedback  
- Data is stored in a JSON file  
- Built with **HTML**, **JavaScript**, and **Node.js**

## 📁 Project Structure

```
project-folder/
├── frontend/
│   ├── user.html       # Feedback form
│   ├── admin.html      # Admin view
│   ├── user.js         # Handles user-side submission
│   └── admin.js        # Loads and displays feedback for admin
├── backend/
│   └── server.js       # Express backend with GET/POST routes
├── data/
│   └── feedback.json   # Stores feedback data
└── .gitignore
```

## ▶️ How to Run Locally

1. Open a terminal and navigate to your project folder.  
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node backend/server.js
   ```
4. Open `frontend/user.html` in a browser to submit feedback.  
5. Open `frontend/admin.html` in a browser to view feedback.

## 📚 Purpose

Created to learn full-stack fundamentals and understand frontend-backend communication.
