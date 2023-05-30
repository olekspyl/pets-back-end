const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models/user");
const { HttpError } = require("../../utils");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(404, "User not found");
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw HttpError(401, "Password or email not valid");
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    user: {
      _id: user._doc._id,
      email: user._doc.email,
      createdAt: "2023-05-22T17:00:32.675Z",
      updatedAt: user._doc.updatedAt,
      city: user._doc.city,
      avatarURL: user._doc.avatarURL,
      token,
      name: user._doc.name,
      birthday: user._doc.birthday,
      phone: user._doc.phone,
    },
  });
};
module.exports = login;
