import AddTodo from "./AddTodo";
import TodosList from "./TodosList";

const Todos = () => {
	return (
		<div className="m-4">
			<AddTodo />
			<TodosList />
		</div>
	);
};

export default Todos;
