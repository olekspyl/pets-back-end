const express = require("express");
const ctrl = require("../../controllers/pets");
const { uploadCloud, checkAuth } = require("../../middlewars");

const router = express.Router();

router.post("/", checkAuth, uploadCloud.single("image"), ctrl.petRegister);
router.delete("/:petId", checkAuth, ctrl.petDelete);

module.exports = router;
