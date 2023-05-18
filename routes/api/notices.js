const express = require("express");
const { schemas } = require("../../models/user");
const { validateBody} = require("../../middlewars");
const router = express.Router();
// const ctrl = require("../../controllers/users");


// створити ендпоінт для пошуку оголошеннь по заголовку
router.get("/:name", ctrl.getNoticeByName); 

// створити ендпоінт для отримання оголошень по категоріям
router.get("/:category", ctrl.getNoticeByCategory);

// створити ендпоінт для отримання одного оголошення
router.get("/:noticeId", ctrl.getNoticeById);

// створити ендпоінт для додавання оголошення до обраних
router.post("/favourite", ctrl.addToFavourite);

// створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані
router.get("/favourite/:noticeId", ctrl.findByNameAmongFav);

// створити ендпоінт для видалення оголошення авторизованого користувача доданих цим же до обраних
router.delete("/favourite/:noticeId", ctrl.deleteAmongFav);

// створити ендпоінт для додавання оголошень відповідно до обраної категорії
router.post("/category", ctrl.addNoticeinCategory);

// створити ендпоінт для отримання оголошень авторизованого кристувача створених цим же користувачем
router.get("/", ctrl.getAllNotices);

// створити ендпоінт для видалення оголошення авторизованого користувача створеного цим же користувачем 
router.delete("/:noticeId", ctrl.deleteNotice);