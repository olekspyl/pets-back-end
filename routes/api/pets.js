const express = require("express");
const { schemas } = require("../../models/user");
const { validateBody } = require("../../middlewars");
const router = express.Router();
const ctrl = require("../../controllers/pets");
const checkAuth = require("../../middlewars/checkAuth");
const uploadCloud = require("../../middlewars/uploadCloud");

router.post("/", checkAuth, uploadCloud.single("image"), ctrl.petRegister);

module.exports = router;
