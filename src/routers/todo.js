const express = require("express");
const controller = require("../controllers/todo");
const json_date_parser = require("../middlewares/json_date_parser");


const todoRouter = express.Router();
todoRouter.use(express.json());

todoRouter.get("/", controller.getAll)

todoRouter.post("/", json_date_parser, controller.create)

todoRouter.get("/:id", controller.getById)

todoRouter.patch("/:id", json_date_parser, controller.update)

todoRouter.delete("/:id", controller.removeById)

module.exports = todoRouter;

