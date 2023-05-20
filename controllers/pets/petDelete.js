const { Pet } = require("../../models/pet");
const { HttpError } = require("../../utils");

const petDelete = async (req, res) => {
  console.log("it is petDelete controller");
  const { petId } = req.params;
  console.log("   petId", petId);
  const { id: owner } = req.userId;

  console.log("whome we deleted", {
    _id: petId,
    owner,
  });
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
    message: "pet deleted",
  });
};

module.exports = petDelete;
