const User = require("../models/User");
const Event = require("../models/Event");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// GET /users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /users/:id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /users/:id/events
exports.getEventByUser = async (req, res) => {
  try {
    const events = await Event.find({ organizer: req.params.id });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /users/:id/attending
exports.getEventsUserAttends = async (req, res) => {
  try {
    const events = await Event.find({ guests: req.params.id });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /users
exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);

    req.body.password = hashedPassword;
    const newUser = new User(req.body);
    const savedUser = await newUser.save();

    const userObject = savedUser.toObject();
    delete userObject.password;

    res.status(201).json({
      message: "User created successfully",
      user: userObject,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /users/login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    const userObject = user.toObject();
    delete userObject.password;

    res
      .status(200)
      .json({ message: "Login successful", token, user: userObject });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /users/:id
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /users/:id
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
