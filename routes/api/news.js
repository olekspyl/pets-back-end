const { getOurNews } = require("../../controllers/news/news");
const router = require("express").Router();

router.get("/our-news", getOurNews);

module.exports = router;
