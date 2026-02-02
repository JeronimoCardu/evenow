const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    organizer: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    category: {
      type: [String],
      required: true,
    },
    rules: {
      type: [String],
      default: [],
    },
    guests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true },
);

const Event = mongoose.model("event", eventSchema);

module.exports = Event;
