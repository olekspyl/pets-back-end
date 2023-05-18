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

const remoweNoticeById = async (req, res) => {
  const { _id: owner } = req.user;
  const { noticeId } = req.params;

  const result = await Notice.findOneAndDelete({ _id: noticeId, owner });

  if (!result) {
    throw HttpError(404);
  }

  res.json({
    status: "success",
    code: 200,
    message: "notice deleted",
  });
};

module.exports = {
  getNoticeById: ctrlWrapper(getNoticeById),
  remoweNoticeById: ctrlWrapper(remoweNoticeById),
};
