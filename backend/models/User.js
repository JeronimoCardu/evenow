const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    
    myEvents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "event",
        default: [],
      },
    ],
    attendingEvents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "event",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("user", userSchema);
module.exports = User;
