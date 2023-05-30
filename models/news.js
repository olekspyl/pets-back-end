const { Schema, model } = require("mongoose");

const newsSchema = new Schema({
  img: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
});

const NewsModel = model("new", newsSchema);

module.exports = {
  NewsModel,
};
