const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Path to feedback.json (from backend folder)
const dataPath = path.join(__dirname, "../data/feedback.json");

// middleware to serve the frontend
const frontendPath = path.join(__dirname, "../frontend")
app.use(express.static(frontendPath));


// Middleware to parse JSON from request body to js object so that we can manipulate it in route logic.
app.use(express.json());

// POST /feedback — Save feedback from user
app.post("/api/feedback", (req, res) => {
  const newFeedback = req.body; // expects { name, email, message }

  // Read existing feedback
  const data = fs.readFileSync(dataPath, "utf8"); 
  const feedbacks = data ? JSON.parse(data) : [];
 
  // Add the new feedback
  feedbacks.push(newFeedback);

  // Write updated feedback back to file
  fs.writeFileSync(dataPath, JSON.stringify(feedbacks, null, 2));

  res.send("Feedback received!");
});

// GET /feedbacks — Send all feedback to admin
app.get("/api/feedback", (req, res) => {
  const data = fs.readFileSync(dataPath, "utf8");
  const feedbacks = data ? JSON.parse(data) : [];

  res.json(feedbacks);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
