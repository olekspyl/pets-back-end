const express = require("express");
const { schemas } = require("../../models/user");
const { validateBody } = require("../../middlewars");
const router = express.Router();
const ctrl = require("../../controllers/auth/users");
const checkAuth = require("../../middlewars/checkAuth");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.post("/logout", checkAuth, ctrl.logout);
// router.patch(
//   "/update",
//   validateBody(schemas.updateUserSchema),
//   ctrl.updateUserData
// );
router.get("/current", ctrl.getCurrentUser);
// router.get("/current/pets", ctrl.getCurrentUserPets);

module.exports = router;
