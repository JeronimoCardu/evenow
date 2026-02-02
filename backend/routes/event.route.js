const express = require("express");
const router = express.Router();
const  authenticateUser  = require("../middlewares/auth.middleware");

const {
  getEvents,
  getEventByID,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/event.controller");

// GET
router.get("/", getEvents);
router.get("/:id", getEventByID);

// POST
router.post("/", authenticateUser, createEvent);

// PUT
router.put("/:id", authenticateUser, updateEvent);

// DELETE
router.delete("/:id", authenticateUser, deleteEvent);

module.exports = router;
