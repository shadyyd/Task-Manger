const express = require("express");
const authController = require("../controller/authController");
const userController = require("../controller/userController");
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

router.use(authController.protect);

router.route("/").get(userController.getAllUsers);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
