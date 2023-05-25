const { Notice } = require("../../models/notice");
const { HttpError } = require("../../utils");

const removeNoticeById = async (req, res) => {
  const { id: owner } = req.userId;
  const { noticeId } = req.params;

  const result = await Notice.findOneAndDelete({
    _id: noticeId,
    owner,
  });

  if (!result) {
    throw HttpError(404);
  }

  res.json({
    status: "success",
    code: 200,
    data: result,
    message: "notice deleted",
  });
};

module.exports = removeNoticeById;
