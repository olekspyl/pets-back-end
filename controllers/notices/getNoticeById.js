const { Notice } = require("../../models/notice");
const { HttpError } = require("../../utils");

const getNoticeById = async (req, res) => {
  const { noticeId } = req.params;

  const notice = await Notice.findById({ _id: noticeId }, "-__v").populate(
    "owner",
    "name email phone city"
  );

  if (!notice) {
    throw HttpError(404);
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      notice,
    },
  });
};

module.exports = getNoticeById;
