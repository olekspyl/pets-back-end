const { Pet } = require("../../models/pet");

const petRegister = async (req, res) => {
  console.log(" it is petRegister controller");
  const { id } = req.userId;

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

  console.log("new pet", newPet);

  const result = await Pet.create(newPet);

  res.status(201).json(result);
};

module.exports = petRegister;
