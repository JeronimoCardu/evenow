const express = require("express");
const router = express.Router();

const {
  getEvents,
  getEventByID,
  getEventsByCategory,
  getEventsByMonth,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/event.controller");

// GET
router.get("/", getEvents);
router.get("/:id", getEventByID);
router.get("/category/:category", getEventsByCategory);
router.get("/month/:month", getEventsByMonth);

// POST
router.post("/", createEvent);

// PUT
router.put("/:id", updateEvent);

// DELETE
router.delete("/:id", deleteEvent);

module.exports = router;
