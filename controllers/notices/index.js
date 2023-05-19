const addNoticeInCategory = require("./addNoticeInCategory");
const getNoticeByCategory = require("./getNoticeByCategory");
const remoweNoticeById = require("./remoweNoticeById");
const getNoticeById = require("./getNoticeById");
const getNoticeByName = require("./getNoticeByName");

const { ctrlWrapper } = require("../../utils");

module.exports = {
  addNoticeInCategory: ctrlWrapper(addNoticeInCategory),
  getNoticeByCategory: ctrlWrapper(getNoticeByCategory),
  remoweNoticeById: ctrlWrapper(remoweNoticeById),
  getNoticeById: ctrlWrapper(getNoticeById),
  getNoticeByName: ctrlWrapper(getNoticeByName),
};
