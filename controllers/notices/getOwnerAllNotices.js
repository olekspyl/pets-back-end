const { Notice } = require("../../models/notice");
const { paginate } = require("../../utils");

const getOwnerAllNotices = async (req, res) => {
  const { id: owner } = req.userId;
  const { page: processedPage, limit: processedLimit } = req.query;

  const { page, limit, skip } = paginate(processedPage, processedLimit);

  const totalNotices = await Notice.find({
    owner,
  }).count();

  const notices = await Notice.find({ owner }, "-__v", {
    skip,
    limit,
  })
    .sort({ createdAt: -1 })
    .populate("owner", "name email phone city");

  res.json({
    status: "success",
    code: 200,
    data: {
      totalNotices,
      page,
      totalPages: Math.ceil(totalNotices / limit),
      currentOnPage: notices.length,
      notices,
    },
  });
};

module.exports = getOwnerAllNotices;
