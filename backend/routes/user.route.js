const express = require("express");
const router = express.Router();
const authenticateUser = require("../middlewares/auth.middleware");

const {
  getUsers,
  getUserById,
  getUserProfile,
  getEventByUser,
  getEventsUserAttends,
  createUser,
  loginUser,
  logoutUser,
  updateUser,
  attendEvent,
  deleteUser,
} = require("../controllers/user.controller");

// GET
router.get("/", getUsers);
router.get("/profile", authenticateUser, getUserProfile);
router.get("/:id", getUserById);
router.get("/:id/events", authenticateUser, getEventByUser);
router.get("/:id/attending", authenticateUser, getEventsUserAttends);

// POST
router.post("/", createUser);
router.post("/login", loginUser);
router.post("/logout", authenticateUser, logoutUser);

// PUT
router.put("/:id", authenticateUser, updateUser);
router.put("/:id/attend", authenticateUser, attendEvent);

// DELETE
router.delete("/:id", authenticateUser, deleteUser);

module.exports = router;
