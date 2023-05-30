const express = require("express");
const { validateBody, checkAuth, uploadCloud } = require("../../middlewars");
const { schemas } = require("../../models/notice");
const ctrl = require("../../controllers/notices");

const router = express.Router();

// створити ендпоінт для пошуку оголошеннь по заголовку
router.get("/", ctrl.getNoticeByName);

// створити ендпоінт для отримання одного оголошення
router.get("/notice/:id", ctrl.getNoticeById);

// створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані
router.get("/favorite", checkAuth, ctrl.getUserFavNotices);

// створити ендпоінт для отримання оголошень авторизованого кристувача створених цим же користувачем
router.get("/user", checkAuth, ctrl.getOwnerAllNotices);

// створити ендпоінт для додавання оголошення до обраних
router.patch("/favorite/:noticeId", checkAuth, ctrl.addToFavorite);

// створити ендпоінт для додавання оголошень відповідно до обраної категорії
router.post(
  "/category",
  checkAuth,
  uploadCloud.single("image"),
  validateBody(schemas.addNewNoticeSchema),
  ctrl.addNoticeInCategory
);

// створити ендпоінт для видалення оголошення авторизованого користувача доданих цим же до обраних
router.delete("/favorite/:noticeId", checkAuth, ctrl.removeUserFavNotice);

// створити ендпоінт для видалення оголошення авторизованого користувача створеного цим же користувачем
router.delete("/:noticeId", checkAuth, ctrl.removeNoticeById);

module.exports = router;
