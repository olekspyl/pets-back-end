const { Notice } = require("../../models/notice");
const { HttpError } = require("../../utils");

const addToFavorite = async (req, res) => {
  const { id: userId } = req.userId;
  const { noticeId } = req.params;

  const notice = await Notice.findOne({ _id: noticeId, favorite: userId });

  if (notice) {
    throw HttpError(
      409,
      "You have already added this notice to your favorites"
    );
  }

  const result = await Notice.findOneAndUpdate(
    {
      _id: noticeId,
    },
    { $push: { favorite: userId } },
    { new: true }
  );

  if (!result) {
    throw HttpError(404);
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = addToFavorite;
