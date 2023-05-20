const { Notice } = require("../../models/notice");

const addNoticeInCategory = async (req, res) => {
  console.log("it is addNoticeInCategory");
  const { category } = req.query;
  const { id: owner } = req.userId;

  const newNotice = {
    ...req.body,
    category,
    owner,
    imgURL: "dhfgudhfgud",
    price: "25",
  };

  console.log("newNotice", newNotice);

  const result = await Notice.create(newNotice);
  console.log("result, result", result);

  res.status(201).json(result);
};

module.exports = addNoticeInCategory;
