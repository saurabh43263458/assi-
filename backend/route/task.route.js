const express = require("express");
const taskRoute = express.Router()
const taskMiddleware = require("../middleware/task.middleware")
const taskController = require("../controller/task.controller")

/**
 * @route /create
 * @description it help in creating and saving the task
 */

taskRoute.post("/create",taskMiddleware,taskController.addtask);

/**
 * @route /getalltask
 * @description it is used for getting all the task 
 */

taskRoute.get("/getalltask",taskMiddleware,taskController.getAllTasks);

/**
 * @route  /updatetask
 * @description update the task 
 */

taskRoute.put("/updatetask",taskMiddleware,taskController.edittask);

/**
 * @route /delete task
 * @description deleting the task
 */

taskRoute.delete("/deletetask",taskMiddleware,taskController.deletetask);



module.exports  =taskRoute