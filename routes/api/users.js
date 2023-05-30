const express = require("express");
const { schemas } = require("../../models/user");
const { validateBody, checkAuth, uploadCloud } = require("../../middlewars");
const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.post("/logout", checkAuth, ctrl.logout);

router.put(
  "/update",
  checkAuth,
  uploadCloud.single("image"),
  validateBody(schemas.updateUserSchema),
  ctrl.updateUserData
);

router.get("/current", checkAuth, ctrl.getCurrentUser);

module.exports = router;
