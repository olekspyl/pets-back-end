const addNoticeInCategory = require("./addNoticeInCategory");
const getNoticeByCategory = require("./getNoticeByCategory");
const remoweNoticeById = require("./remoweNoticeById");
const getNoticeById = require("./getNoticeById");
const getNoticeByName = require("./getNoticeByName");
const addToFavourite = require("./addToFavourite");
const findByNameAmongFav = require("./findByNameAmongFav");
const deleteAmongFav = require("./deleteAmongFav");

const { ctrlWrapper } = require("../../utils");

module.exports = {
  addNoticeInCategory: ctrlWrapper(addNoticeInCategory),
  getNoticeByCategory: ctrlWrapper(getNoticeByCategory),
  remoweNoticeById: ctrlWrapper(remoweNoticeById),
  getNoticeById: ctrlWrapper(getNoticeById),
  getNoticeByName: ctrlWrapper(getNoticeByName),
  addToFavourite: ctrlWrapper(addToFavourite),
  findByNameAmongFav: ctrlWrapper(findByNameAmongFav),
  deleteAmongFav: ctrlWrapper(deleteAmongFav),
};
