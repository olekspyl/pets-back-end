const express = require("express");
const router = express.Router();
// const ctrl = require("../../controllers/users");

router.get("/google", ctrl.googleAuth);
router.get("/google-redirect", ctrl.googleRedirect);

module.exports = router;
