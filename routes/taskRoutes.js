const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");
const authController = require("../controller/authController");

router.route("/").get(taskController.getTasks);

router.use(authController.protect);

router.route("/").post(taskController.createTask);

router
  .route("/:id")
  .get(taskController.getTask)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;
