const User = require("../models/User");

const getUserProfile = async (req, res) => {
    const user = await User.findById(req.user.id);
    res.json(user);
};

const updateSavedPosts = async (req, res) => {
    const user = await User.findById(req.user.id);
    user.savedPosts = req.body.savedPosts;
    await user.save();
    res.json({ msg: "Saved posts updated" });
};

module.exports = { getUserProfile, updateSavedPosts };