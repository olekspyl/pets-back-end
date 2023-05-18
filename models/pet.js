const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");
const Joi = require("joi");

const petSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name"],
  },
  dateOfBirth: {
    type: String,
    required: [true, "Set date of birth"],
  },
  breed: {
    type: String,
    required: [true, "Set breed"],
  },
  place: {
    type: String,
    required: [true, "Set place"],
  },
  sex: {
    type: String,
    required: [true, "Set the sex"],
  },
  comments: String,
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const addNewPetSchema = Joi.object({
  name: Joi.string().required(),
  dateOfBirth: Joi.string().required(),
  breed: Joi.string().required(),
  place: Joi.string().required(),
  sex: Joi.string().required(),
  comments: Joi.string(),
});

const updatePetToFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addNewPetSchema,
  updatePetToFavoriteSchema,
};

petSchema.post("save", handleMongooseError);

const Pet = model("pet", petSchema);

module.exports = {
  Pet,
  schemas,
};
