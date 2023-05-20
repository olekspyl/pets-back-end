const petRegister = require("./petRegister");
const { ctrlWrapper } = require("../../utils");

module.exports = {
  petRegister:ctrlWrapper(petRegister),
};