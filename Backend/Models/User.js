const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNo:{
        type: String,
    },
    age:{
        type: Number,
    },
    dateOfBirth: {
        type: Date
    },
    role: {
        type: String,
        default: 'user'
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    },
    location: {
        country: {
            type: String
        },
        city: {
            type: String
        },
    },
    favoriteGenres: [{
        type: String,
        enum: ['action', 'adventure', 'comedy', 'crime', 'drama', 'fantasy', 'historical',
                'horror', 'mystery', 'philosophical', 'political', 'romance', 'saga', 'satire',
                'science fiction', 'social', 'speculative', 'thriller', 'urban', 'western']
    }],
    languagePreferences: [{
        type: String,
        enum: ['english', 'hindi', 'spanish', 'french', 'german', 'chinese', 'arabic', 'bengali',
                'russian', 'portuguese', 'japanese', 'urdu', 'punjabi', 'telugu', 'tamil', 'marathi',
                'turkish', 'korean', 'vietnamese', 'italian', 'thai', 'gujarati', 'polish', 'ukrainian',
                'malayalam', 'kannada', 'oriya', 'sindhi', 'serbian', 'swedish', 'dutch', 'greek',
                'czech', 'finnish', 'hungarian', 'hebrew', 'indonesian', 'nepali', 'norwegian', 'persian',
                'slovak', 'swahili', 'taiwanese', 'tibetan', 'zulu', 'other']
    }],

},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);