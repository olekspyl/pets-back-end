const { Notice } = require("../../models/notice");
const { paginate } = require("../../utils");

const getNoticeByName = async (req, res) => {
  const {
    page: processedPage,
    limit: processedLimit,
    search = "",
    category,
  } = req.query;

  const { page, limit, skip } = paginate(processedPage, processedLimit);

  const query = category
    ? { category, title: { $regex: search, $options: "i" } }
    : { title: { $regex: search, $options: "i" } };

  const totalNotices = await Notice.find(query).count();

  const notices = await Notice.find(query, "-__v", { skip, limit })
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

module.exports = getNoticeByName;
