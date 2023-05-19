const { Notice } = require("../../models/notice");

const getNoticeByName = async (req, res) => {
  //   const { _id: owner } = req.user;

  let { page = 1, limit = 12, search = "" } = req.query;

  const parsedPage = parseInt(page);
  const parsedLimit = parseInt(limit);
  page = parsedPage >= 1 ? parsedPage : 1;
  limit = parsedLimit > 1 && parsedLimit < 12 ? parsedLimit : 12;

  const skip = (parseInt(page) - 1) * limit;

  const totalNotices = await Notice.find({
    title: { $regex: search, $options: "i" },
  }).count();

  const notices = await Notice.find(
    {
      title: { $regex: search, $options: "i" },
    },
    "",
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

module.exports = getNoticeByName;
