const { Notice } = require("../../models/notice");
const { paginate } = require("../../utils");

const getNoticeByName = async (req, res) => {
  //   const { _id: owner } = req.user;

  const {
    page: processedPage,
    limit: processedLimit,
    search = "",
    category,
  } = req.query;

  console.log("search", search);

  const { page, limit, skip } = paginate(processedPage, processedLimit);

  let query = category
    ? { category, title: { $regex: search, $options: "i" } }
    : { title: { $regex: search, $options: "i" } };

  console.log("query", query);

  const totalNotices = await Notice.find(query).count();

  const notices = await Notice.find(query, "", { skip, limit });

  console.log("notices", notices);
  if (!notices) {
    throw HttpError(404, "Not found");
  }

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
