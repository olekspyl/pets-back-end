const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const { User } = require("../../models/user");
const { Pet } = require("../../models/pet");
const { ctrlWrapper, HttpError } = require("../../utils");
const { use } = require("../../app");

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(401, "User found");
  }
  const hash = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const newUser = await User.create({
    ...req.body,
    password: hash,
    avatarURL,
  });
  console.log(newUser);
  const payload = {
    id: newUser._id,
  };
  const token = await jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });

  const createUser = await User.findByIdAndUpdate(
    newUser._id,
    {
      token,
      avatarURL,
    },
    { new: true }
  );

  res.json(createUser);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(404, "User not fund");
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw HttpError(401, "Password or email not valid");
  }
  const payload = {
    id: user._id,
  };
  const token = await jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.json({
    token,
    user,
  });
};

const logout = async (req, res) => {
  const { id } = req.userId;
  await User.findByIdAndUpdate(id, { token: "" });

  res.json({
    message: "Success logout",
  });
};

const getCurrentUser = async (req, res) => {
  const { id } = req.userId;
  const userInfo = await User.findById(
    id,
    "name email birthday phone city avatarURL"
  );

  const petsInfo = await Pet.find({ owner: id });

  res.status(200).json({ userInfo, petsInfo });
};

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  getCurrentUser: ctrlWrapper(getCurrentUser),
};
