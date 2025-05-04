const express = require("express");
const { generateFeed, reportPost } = require("../controllers/feedController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/generate", auth, generateFeed);
router.post("/report", auth, reportPost);

module.exports = router;