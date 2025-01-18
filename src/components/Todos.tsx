import AddTodo from "./AddTodo";
import TodosList from "./TodosList";

const Todos = () => {
	return (
		<div className="flex flex-col gap-4 max-w-sm mx-auto">
			<AddTodo />
			<TodosList />
		</div>
	);
};

export default Todos;
