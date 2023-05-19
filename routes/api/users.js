const express = require("express");
const { schemas } = require("../../models/user");
const { validateBody } = require("../../middlewars");
const router = express.Router();
// const ctrl = require("../../controllers/users");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
router.patch(
  "/update",
  validateBody(schemas.updateUserSchema),
  ctrl.updateUserData
);
router.get("/current", ctrl.getCurrentUser);
// router.get("/current/pets", ctrl.getCurrentUserPets);
router.post("/logout", ctrl.logout);

module.exports = router;
