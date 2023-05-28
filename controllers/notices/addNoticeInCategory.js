const { Notice } = require("../../models/notice");

const addNoticeInCategory = async (req, res) => {
  const { category } = req.query;
  const { id: owner } = req.userId;

  let newNotice = {
    ...req.body,
    category,
    owner,
    imgURL: "",
  };

  if (req.file) {
    const { path } = req.file;
    newNotice = {
      ...req.body,
      category,
      owner,
      imgURL: path,
    };
  }

  const result = await Notice.create(newNotice);
  res.status(201).json(result);
};

module.exports = addNoticeInCategory;
