const express = require("express");
const { schemas } = require("../../models/user");
const { validateBody } = require("../../middlewars");
const router = express.Router();
const ctrl = require("../../controllers/pets");
const {uploadCloud, checkAuth} = require("../../middlewars");

router.post("/", checkAuth, uploadCloud.single("image"), ctrl.petRegister);

// router.delete(
//   "/:imageId",
//   authMiddleware,
//   uploadCloud.single("image"),
//   PetController.petRegister
// );

module.exports = router;
