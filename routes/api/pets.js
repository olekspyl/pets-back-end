const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/pets");
const { uploadCloud, checkAuth } = require("../../middlewars");

router.post("/", checkAuth, uploadCloud.single("image"), ctrl.petRegister);
router.delete("/:petId", checkAuth, ctrl.petDelete);

module.exports = router;
