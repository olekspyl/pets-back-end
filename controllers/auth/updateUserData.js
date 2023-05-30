const { User } = require("../../models/user");
const { HttpError } = require("../../utils");

const updateUserData = async (req, res) => {
  const { id } = req.userId;

  let updatedUser = {
    ...req.body,
  };

  if (req.file) {
    const { path } = req.file;
    updatedUser = {
      ...req.body,
      avatarURL: path,
    };
  }

  const result = await User.findByIdAndUpdate(id, updatedUser, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }

  const updatedUserObject = result.toObject();
  delete updatedUserObject.password;

  res.json(updatedUserObject);
};

module.exports = updateUserData;
