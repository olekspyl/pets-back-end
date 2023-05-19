const { Notice } = require("../../models/notice");

const addNoticeInCategory = async (req, res) => {
  console.log("it is addNoticeInCategory");
  const { category } = req.params;
  const { _id: owner } = req.user;
  const result = Notice.create({ ...req.body, category, owner });
  res.status(201).json(result);
};

module.exports = addNoticeInCategory;
