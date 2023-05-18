const express = require("express");
const { schemas } = require("../../models/user");
const { validateBody} = require("../../middlewars");
const router = express.Router();
// const ctrl = require("../../controllers/users");

router.post("/register", ctrl.register);
router.post("/login",  ctrl.login);
router.patch("/update", ctrl.updateUserData)
router.get("/current", ctrl.getCurrentUser);
router.get("/current/pets", ctrl.getCurrentUserPets);
router.post("/logout", ctrl.logout);

module.exports = router;