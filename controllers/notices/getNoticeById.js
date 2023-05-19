const { Notice } = require("../../models/notice");
const { HttpError } = require("../../utils");

const getNoticeById = async (req, res) => {
  // const { _id: owner } = req.user;
  const { noticeId } = req.params;

  const notice = await Notice.findById(
    { _id: noticeId }
    // "-createdAt -updatedAt -idCloudAvatar -__v"
  );
  // .populate("owner", "email phone");

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
