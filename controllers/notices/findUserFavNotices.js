const { Notice } = require("../../models/notice");
const { paginate } = require("../../utils");

const findUserFavNotices = async (req, res) => {
  const { id: owner } = req.userId;

  const { page: processedPage, limit: processedLimit } = req.query;

  const { page, limit, skip } = paginate(processedPage, processedLimit);

  const totalNotices = await Notice.find({
    favorite: owner,
  }).count();

  const notices = await Notice.find(
    {
      favorite: owner,
    },
    "-__v",
    { skip, limit }
  );

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

module.exports = findUserFavNotices;
