const router = require("express").Router();
const { getOurNews } = require("../../controllers/news/news");

router.get("/our-news", getOurNews);

module.exports = router;
