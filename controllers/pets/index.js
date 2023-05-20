const petRegister = require("./petRegister");
const petDelete = require("./petDelete");
const { ctrlWrapper } = require("../../utils");

module.exports = {
  petRegister: ctrlWrapper(petRegister),
  petDelete: ctrlWrapper(petDelete),
};
