const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    tag: {
        type: String,
        enum: ['profile', 'header', 'general'],
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const File = mongoose.model("File", fileSchema);
module.exports = File;