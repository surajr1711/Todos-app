import Todo from "../models/todoModel.js";

export const getTodos = async (req, res) => {
	try {
		const todos = await Todo.find();
		// res.send("Hello from todosController");
		res.json(todos);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

export const addTodo = async (req, res) => {
	const { text, done } = req.body;
	const todo = new Todo({
		text,
		done,
	});
	try {
		const newTodo = await todo.save();
		res.status(201).json(newTodo);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

export const deleteTodo = async (req, res) => {
	try {
		const deleted = await Todo.findByIdAndDelete(req.params.id);
		if (!deleted) {
			return res.status(404).json({ message: "Todo not found" });
		}
		res.status(200).json({ message: "Todo deleted" });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

export const updateTodo = async (req, res) => {
	try {
		const updated = await Todo.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true, runValidators: true });
		if (!updated) {
			return res.status(404).json({ message: "Todo not found" });
		}
		res.json(updated);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

/*
export const getTodos = async (req: Request, res: Response): Promise<void> => {
	try {
		const todos: ITodo[] = await Todo.find();
		res.json(todos);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
*/

/*
export const addTodo = async (req: Request, res: Response): Promise<void> => {
	const todo = new Todo({
		todo: req.body.todo,
		done: req.body.done,
		userId: req.body.userId,
	});

	try {
		const newTodo: ITodo = await todo.save();
		res.status(201).json(newTodo);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};
 */

/*
export const deleteTodo = async (req: Request, res: Response): Promise<void> => {
	try {
		const todo: ITodo | null = await Todo.findById(req.params.id);
		if (!todo) {
			res.status(404).json({ message: "Todo not found" });
			return;
		}

		await todo.remove();
		res.json({ message: "Todo deleted" });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
*/

/*
export const toggleTodo = async (req: Request, res: Response): Promise<void> => {
	try {
		const todo: ITodo | null = await Todo.findById(req.params.id);
		if (!todo) {
			res.status(404).json({ message: "Todo not found" });
			return;
		}

		todo.done = !todo.done;
		const updatedTodo: ITodo = await todo.save();
		res.json(updatedTodo);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
*/

/*
export const editTodo = async (req: Request, res: Response): Promise<void> => {
	try {
		const todo: ITodo | null = await Todo.findById(req.params.id);
		if (!todo) {
			res.status(404).json({ message: "Todo not found" });
			return;
		}

		todo.todo = req.body.todo;
		const updatedTodo: ITodo = await todo.save();
		res.json(updatedTodo);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
 */
