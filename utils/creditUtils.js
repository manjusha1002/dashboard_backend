const User = require("../models/User");

const updateCredits = async (userId, amount, reason = "") => {
    const user = await User.findById(userId);
    if (!user) return;
    user.credits += amount;
    await user.save();
    console.log(`Credits updated for ${user.email}: +${amount} (${reason})`);
};

module.exports = { updateCredits };