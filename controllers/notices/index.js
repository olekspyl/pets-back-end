const addNoticeInCategory = require("./addNoticeInCategory");
// const getNoticeByCategory = require("./getNoticeByCategory");
const remoweNoticeById = require("./remoweNoticeById");
const getNoticeById = require("./getNoticeById");
const getNoticeByName = require("./getNoticeByName");
const addToFavourite = require("./addToFavourite");
const getUserFavNotices = require("./getUserFavNotices");
const removeUserFavNotice = require("./removeUserFavNotice");
const getOwnerAllNotices = require("./getOwnerAllNotices");

const { ctrlWrapper } = require("../../utils");

module.exports = {
  addNoticeInCategory: ctrlWrapper(addNoticeInCategory),
  // getNoticeByCategory: ctrlWrapper(getNoticeByCategory),
  remoweNoticeById: ctrlWrapper(remoweNoticeById),
  getNoticeById: ctrlWrapper(getNoticeById),
  getNoticeByName: ctrlWrapper(getNoticeByName),
  addToFavourite: ctrlWrapper(addToFavourite),
  getUserFavNotices: ctrlWrapper(getUserFavNotices),
  removeUserFavNotice: ctrlWrapper(removeUserFavNotice),
  getOwnerAllNotices: ctrlWrapper(getOwnerAllNotices),
};
