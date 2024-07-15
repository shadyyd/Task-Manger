const Task = require("../models/Task");
const factory = require("./handlerFactory");

exports.getTasks = factory.getAll(Task);
exports.getTask = factory.getOne(Task);
exports.createTask = factory.createOne(Task);
exports.updateTask = factory.updateOne(Task);
exports.deleteTask = factory.deleteOne(Task);
