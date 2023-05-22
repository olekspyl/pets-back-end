const login = require("./login");
const register = require("./register");
const logout = require("./logout");
const getCurrentUser = require("./getCurrentUser");

const { ctrlWrapper } = require("../../utils");

module.exports = {
  login: ctrlWrapper(login),
  register: ctrlWrapper(register),
  logout: ctrlWrapper(logout),
  getCurrentUser: ctrlWrapper(getCurrentUser),
};
