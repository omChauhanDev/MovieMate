const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      default: null,
    },
    age: {
      type: Number,
      default: null,
    },
    dateOfBirth: {
      type: Date,
      default: null,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      default: null,
    },
    location: {
      country: {
        type: String,
      },
      state: {
        type: String,
      },
      city: {
        type: String,
      },
    },
    favoriteGenres: [
      {
        type: String,
      },
    ],
    languagePreferences: [
      {
        type: String,
      },
    ],
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Friendship",
      },
    ],
    files: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "File",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
