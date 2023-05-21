const { Notice } = require("../../models/notice");
// const { HttpError } = require("../../utils");

const findByNameAmongFav = async (req, res) => {
  const { id: owner } = req.userId;

  let { page = 1, limit = 12 } = req.query;

  const parsedPage = parseInt(page);
  const parsedLimit = parseInt(limit);
  page = parsedPage >= 1 ? parsedPage : 1;
  limit = parsedLimit > 1 && parsedLimit < 12 ? parsedLimit : 12;

  const skip = (parseInt(page) - 1) * limit;

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

  //   if (!notices.length) {
  //     throw HttpError(404);
  //   }

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

module.exports = findByNameAmongFav;

// const { Notice } = require("../../models/notice");
// const { HttpError } = require("../../utils");

// const findByNameAmongFav = async (req, res) => {
//   const { id: owner } = req.userId;

//   const notice = await Notice.find({
//     favorite: owner,
//   });

//   if (!notice) {
//     throw HttpError(404);
//   }

//   res.json({
//     status: "success",
//     code: 200,
//     data: {
//       notice,
//     },
//   });
// };

// module.exports = findByNameAmongFav;
