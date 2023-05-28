const { User } = require("../../models/user");
const { Pet } = require("../../models/pet");
const { HttpError } = require("../../utils");

const getCurrentUser = async (req, res) => {
  const { id } = req.userId;

  const userInfo = await User.findById(
    id,

    "name email birthday phone city avatarURL"
  );
  if (!userInfo) {
    throw HttpError(404, "User not fund");
  }

  const petsInfo = await Pet.find({ owner: id }).sort({ createdAt: -1 });

  res.status(200).json({ userInfo, petsInfo });
};

module.exports = getCurrentUser;
