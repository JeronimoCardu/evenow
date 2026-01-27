const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;

// Cors Middleware
const cors = require("cors");
app.use(cors());

// Init Middleware
app.use(express.json({ extended: false }));

// Connect Database
const connectDB = require("./config/db");
connectDB();

// Define Routes
const userRoute = require("./routes/user.route");
const eventRoute = require("./routes/event.route");

app.use("/api/users", userRoute);
app.use("/api/events", eventRoute);

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
