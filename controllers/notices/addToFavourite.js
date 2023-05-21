const { Notice } = require("../../models/notice");
const { HttpError } = require("../../utils");

const addToFavourite = async (req, res) => {
  const { id: owner } = req.userId;
  const { noticeId } = req.params;

  const notice = await Notice.findOne({ _id: noticeId, favorite: owner });

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
    { $push: { favorite: owner } },
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

module.exports = addToFavourite;
