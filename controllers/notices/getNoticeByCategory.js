const { Notice } = require("../../models/notice");
const { HttpError } = require("../../utils");

const getNoticeByCategory = async (req, res) => {
  const { type: category } = req.params;
  const { page = 1, limit = 10, search: title } = req.query;
  const skip = (page - 1) * limit;

  const query = title ? { category, title } : { category };

  const result = await Notice.find(query, "-updatedAt -createdAt", {
    skip,
    limit,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(result);
};

module.exports = getNoticeByCategory;
