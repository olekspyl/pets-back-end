const { NewsModel } = require("../../models/news");
const { ctrlWrapper } = require("../../utils");

const getOurNews = async (req, res) => {
  const news = await NewsModel.find();

  res.json({ news });
};

module.exports = {
  getOurNews: ctrlWrapper(getOurNews),
};
