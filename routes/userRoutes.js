const express = require("express");
const { getUserProfile, updateSavedPosts } = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/profile", auth, getUserProfile);
router.put("/saved-posts", auth, updateSavedPosts);

module.exports = router;