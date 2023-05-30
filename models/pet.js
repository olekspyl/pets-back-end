const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../utils");

const petSchema = new Schema(
  {
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

    imgURL: { type: String, required: true },

    comments: String,

    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const addNewPetSchema = Joi.object({
  name: Joi.string().required(),
  dateOfBirth: Joi.string().required(),
  breed: Joi.string().required(),
  imgURL: Joi.string().required(),
  comments: Joi.string().allow(""),
});

const schemas = {
  addNewPetSchema,
};

petSchema.post("save", handleMongooseError);

const Pet = model("pet", petSchema);

module.exports = {
  Pet,
  schemas,
};
