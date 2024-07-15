const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categoryController");
const authController = require("../controller/authController");

router.use(authController.protect);

router
  .route("/")
  .get(categoryController.getCategories)
  .post(categoryController.createCategory);

router
  .route("/:id")
  .get(categoryController.getCategory)
  .patch(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

module.exports = router;
