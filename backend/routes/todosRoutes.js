import express from "express";
import { getTodos, addTodo, deleteTodo, updateTodo } from "../controllers/todosController.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", addTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id", updateTodo);

export default router;
