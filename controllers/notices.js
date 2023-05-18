const { Notice } = require("../models/notice");
const { ctrlWrapper, HttpError } = require("../utils");

const getNoticeById = async (req, res) => {
  const { noticeId } = req.params;
  const notice = await Notice.findById({ _id: noticeId }).populate(
    "owner",
    "email phone"
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

module.exports = {
  getNoticeById: ctrlWrapper(getNoticeById),
};
