const { User } = require("../../models/user");

const logout = async (req, res) => {
  const { id } = req.userId;
  await User.findByIdAndUpdate(id, { token: "" });

  res.json({
    message: "Success logout",
  });
};

module.exports = logout;
