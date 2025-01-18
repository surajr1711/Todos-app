import { todos } from "@/db/data";

const TodosList = () => {
	return (
		<div>
			<h2 className="text-lg font-medium mb-2">Todos</h2>
			<ul className="border p-4 rounded-md flex flex-col gap-4">
				{todos.map((todo) => (
					<li key={todo.id}>{todo.todo}</li>
				))}
			</ul>
		</div>
	);
};

export default TodosList;
