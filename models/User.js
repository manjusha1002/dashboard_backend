const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ["User", "Admin"], default: "User" },
    credits: { type: Number, default: 0 },
    savedPosts: [Object],
    lastLoginDate: Date,
});

module.exports = mongoose.model("User", userSchema);