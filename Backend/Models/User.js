const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: null,
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
        enum: [
          "action",
          "adventure",
          "comedy",
          "crime",
          "drama",
          "fantasy",
          "historical",
          "horror",
          "mystery",
          "philosophical",
          "political",
          "romance",
          "saga",
          "satire",
          "science fiction",
          "social",
          "speculative",
          "thriller",
          "urban",
          "western",
        ],
      },
    ],
    languagePreferences: [
      {
        type: String,
        enum: [
          "english",
          "hindi",
          "spanish",
          "french",
          "german",
          "chinese",
          "arabic",
          "bengali",
          "russian",
          "portuguese",
          "japanese",
          "urdu",
          "punjabi",
          "telugu",
          "tamil",
          "marathi",
          "turkish",
          "korean",
          "vietnamese",
          "italian",
          "thai",
          "gujarati",
          "polish",
          "ukrainian",
          "malayalam",
          "kannada",
          "oriya",
          "sindhi",
          "serbian",
          "swedish",
          "dutch",
          "greek",
          "czech",
          "finnish",
          "hungarian",
          "hebrew",
          "indonesian",
          "nepali",
          "norwegian",
          "persian",
          "slovak",
          "swahili",
          "taiwanese",
          "tibetan",
          "zulu",
          "malay",
          "filipino",
          "burmese",
          "amharic",
          "somali",
          "kurdish",
          "uzbek",
          "bhojpuri",
          "farsi",
        ],
      },
    ],
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Friendship",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
