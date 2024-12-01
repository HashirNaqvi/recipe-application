const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors"); // Import CORS
const app = express();
const connectDB = require("./config/configdb");

const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

// Enable CORS
app.use(cors());

// Body parser middleware
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/User"));
app.use("/api/recipes", require("./routes/recipe"));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
