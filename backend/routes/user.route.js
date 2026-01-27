const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUserById,
  getEventByUser,
  getEventsUserAttends,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

// GET
router.get("/", getUsers);
router.get("/:id", getUserById);
router.get("/:id/events", getEventByUser);
router.get("/:id/attending", getEventsUserAttends);

// POST
router.post("/", createUser);

// PUT
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);

module.exports = router;
