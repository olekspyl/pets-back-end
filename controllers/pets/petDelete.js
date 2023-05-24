const { Pet } = require("../../models/pet");
const { HttpError } = require("../../utils");

const petDelete = async (req, res) => {
  const { petId } = req.params;

  const { id: owner } = req.userId;

  const result = await Pet.findOneAndDelete({
    _id: petId,
    owner,
  });

  if (!result) {
    throw HttpError(404);
  }

  res.json({
    status: "success",
    code: 200,
    data: result,
    message: "pet deleted",
  });
};

module.exports = petDelete;
