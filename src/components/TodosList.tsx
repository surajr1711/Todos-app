import { selectTodos } from "@/features/todos/todosSlice";
import { useAppSelector } from "@/store/hooks";

const TodosList = () => {
	const todos = useAppSelector(selectTodos);
	return (
		<div>
			{/* <h2 className="text-lg font-medium mb-2">Todos</h2> */}
			<ul className="flex flex-col gap-4">
				{todos.map((todo) => (
					<li key={todo.id}>{todo.todo}</li>
				))}
			</ul>
		</div>
	);
};

export default TodosList;
