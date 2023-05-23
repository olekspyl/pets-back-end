const addNoticeInCategory = require("./addNoticeInCategory");
// const getNoticeByCategory = require("./getNoticeByCategory");
const remoweNoticeById = require("./remoweNoticeById");
const getNoticeById = require("./getNoticeById");
const getNoticeByName = require("./getNoticeByName");
const addToFavourite = require("./addToFavourite");
const findUserFavNotices = require("./findUserFavNotices");
const deleteUserFavNotice = require("./deleteUserFavNotice");
const getAllOwnerNotices = require("./getAllOwnerNotices");

const { ctrlWrapper } = require("../../utils");

module.exports = {
  addNoticeInCategory: ctrlWrapper(addNoticeInCategory),
  // getNoticeByCategory: ctrlWrapper(getNoticeByCategory),
  remoweNoticeById: ctrlWrapper(remoweNoticeById),
  getNoticeById: ctrlWrapper(getNoticeById),
  getNoticeByName: ctrlWrapper(getNoticeByName),
  addToFavourite: ctrlWrapper(addToFavourite),
  findUserFavNotices: ctrlWrapper(findUserFavNotices),
  deleteUserFavNotice: ctrlWrapper(deleteUserFavNotice),
  getAllOwnerNotices: ctrlWrapper(getAllOwnerNotices),
};
