const express = require("express");
const { validateBody, checkAuth, uploadCloud } = require("../../middlewars");
const { schemas } = require("../../models/notice");
const router = express.Router();
const ctrl = require("../../controllers/notices");

// створити ендпоінт для пошуку оголошеннь по заголовку
router.get("/", ctrl.getNoticeByName);

// створити ендпоінт для отримання оголошень по категоріям
router.get("/category/:type", ctrl.getNoticeByCategory);

// створити ендпоінт для отримання одного оголошення
router.get("/:noticeId", ctrl.getNoticeById);

// створити ендпоінт для додавання оголошення до обраних
// router.patch(
//   "/favourite/:noticeId",
//   validateBody(schemas.updatePetToFavoriteSchema),
//   ctrl.addToFavourite
// );

// створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані
// router.get("/favourite", ctrl.findByNameAmongFav);

// створити ендпоінт для видалення оголошення авторизованого користувача доданих цим же до обраних
// router.delete("/favourite/:noticeId", ctrl.deleteAmongFav);

// створити ендпоінт для додавання оголошень відповідно до обраної категорії
router.post(
  "/category",
  checkAuth,
  validateBody(schemas.addNewNoticeSchema),
  uploadCloud.single("image"),

  ctrl.addNoticeInCategory
);

// створити ендпоінт для отримання оголошень авторизованого кристувача створених цим же користувачем
// router.get("/", ctrl.getAllNotices);

// створити ендпоінт для видалення оголошення авторизованого користувача створеного цим же користувачем
router.delete("/:noticeId", ctrl.remoweNoticeById);

module.exports = router;
