const addNoticeInCategory = require("./addNoticeInCategory");
const getNoticeByCategory = require("./getNoticeByCategory");
const { ctrlWrapper } = require("../../utils");

module.exports = {
  addNoticeInCategory: ctrlWrapper(addNoticeInCategory),
  getNoticeByCategory: ctrlWrapper(getNoticeByCategory),
};
