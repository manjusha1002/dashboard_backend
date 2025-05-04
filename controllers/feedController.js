const axios = require("axios");
const { updateCredits } = require("../utils/creditUtils");
const Report = require("../models/Report");

const generateFeed = async (req, res) => {
    try {
        const response = await axios.get(`https://gnews.io/api/v4/top-headlines`, {
            params: {
                country: "us",
                lang: "en",
                token: process.env.NEWS_API_KEY
            }
        });

        const feed = response.data.articles.map((article, index) => ({
            id: index + 1,
            title: article.title,
            description: article.description,
            url: article.url,
            urlToImage: article.image,
            content: article.content,
            publishedAt: article.publishedAt,
            source: article.source.name
        }));

        await updateCredits(req.user.id, 10, "Generated feed");
        res.json(feed);
    } catch (err) {
        console.error("Error fetching news feed:", err.message);
        res.status(500).json({ msg: "Failed to generate feed" });
    }
};

const reportPost = async (req, res) => {
    const { postId, reason } = req.body;
    await Report.create({ postId, reason, reportedBy: req.user.id });
    res.json({ msg: "Post reported successfully" });
};

module.exports = { generateFeed, reportPost };
