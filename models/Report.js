const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    postId: String,
    reason: String,
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Report", reportSchema);