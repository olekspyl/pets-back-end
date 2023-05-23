const { Notice } = require("../../models/notice");
const { HttpError } = require("../../utils");

const removeUserFavNotice = async (req, res) => {
  const { id: userId } = req.userId;
  const { noticeId } = req.params;

  const notice = await Notice.findOne({
    _id: noticeId,
  });

  if (!notice || !notice.favorite.includes(userId)) {
    throw HttpError(404);
  }

  const result = await Notice.findOneAndUpdate(
    {
      _id: noticeId,
    },
    { $pull: { favorite: userId } },
    { new: true }
  );

  res.json({
    status: "success",
    code: 200,
    message: "notice deleted from favorites",
    result,
  });
};

module.exports = removeUserFavNotice;
