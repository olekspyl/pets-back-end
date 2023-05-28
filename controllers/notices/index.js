const addNoticeInCategory = require("./addNoticeInCategory");
const removeNoticeById = require("./removeNoticeById");
const getNoticeById = require("./getNoticeById");
const getNoticeByName = require("./getNoticeByName");
const addToFavorite = require("./addToFavorite");
const getUserFavNotices = require("./getUserFavNotices");
const removeUserFavNotice = require("./removeUserFavNotice");
const getOwnerAllNotices = require("./getOwnerAllNotices");

const { ctrlWrapper } = require("../../utils");

module.exports = {
  addNoticeInCategory: ctrlWrapper(addNoticeInCategory),
  removeNoticeById: ctrlWrapper(removeNoticeById),
  getNoticeById: ctrlWrapper(getNoticeById),
  getNoticeByName: ctrlWrapper(getNoticeByName),
  addToFavorite: ctrlWrapper(addToFavorite),
  getUserFavNotices: ctrlWrapper(getUserFavNotices),
  removeUserFavNotice: ctrlWrapper(removeUserFavNotice),
  getOwnerAllNotices: ctrlWrapper(getOwnerAllNotices),
};
