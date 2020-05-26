const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
        trim: true,
    },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
    meta: {
        upvotes: Number,
        downvotes: Number
    }
});

const Quote = mongoose.model("Quote", quoteSchema);
module.exports = Quote;