const { User } = require("../../models/user");
const { HttpError } = require("../../utils");

const updateUserData = async (req, res) => {
  const { id } = req.userId;
  const result = await User.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateUserData;
