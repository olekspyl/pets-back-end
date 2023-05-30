const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models/user");
const { HttpError } = require("../../utils");

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "A user with that name already exists");
  }
  const hash = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    ...req.body,
    password: hash,
  });

  const payload = {
    id: newUser._id,
  };
  const token = await jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });

  const createUser = await User.findByIdAndUpdate(
    newUser._id,
    {
      token,
    },
    { new: true }
  );

  res.status(201).json(createUser);
};

module.exports = register;
