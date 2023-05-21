const { Notice } = require("../../models/notice");
// const { HttpError } = require("../../utils");

const findByNameAmongFav = async (req, res) => {
  const { id: owner } = req.userId;
  //   const { noticeId } = req.params;

  const notices = await Notice.find(
    {
      // _id: noticeId,
      favorite: owner,
    },
    "-__v"
  );

  //   if (!notices.length) {
  //     throw HttpError(404);
  //   }

  res.json({
    status: "success",
    code: 200,
    notices,
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
