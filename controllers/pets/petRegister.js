const { Pet } = require("../../models/pet");
const { HttpError } = require("../../utils");

const petRegister = async (req, res) => {
  const { id } = req.userId;

  const pet = await Pet.findOne({ owner: id, name: req.body.name });
  if (pet) {
    throw HttpError(409, "You have already added an animal with that name");
  }

  let newPet = {
    ...req.body,
    owner: id,
  };

  if (req.file) {
    const { path } = req.file;
    const { id } = req.userId;
    newPet = {
      ...req.body,
      owner: id,
      imgURL: path,
    };
  }

  const result = await Pet.create(newPet);

  res.status(201).json(result);
};

module.exports = petRegister;
