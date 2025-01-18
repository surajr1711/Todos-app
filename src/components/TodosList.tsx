import { deleteTodo, selectTodos } from "@/features/todos/todosSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Button } from "./ui/button";
import { LucideX } from "lucide-react";

const TodosList = () => {
	const todos = useAppSelector(selectTodos);
	const dispatch = useAppDispatch();

	const handleDelete = (id: string) => {
		dispatch(deleteTodo(id));
	};

	return (
		<div>
			{/* <h2 className="text-lg font-medium mb-2">Todos</h2> */}
			<ul className="flex flex-col gap-6">
				{todos.map((todo) => (
					<li key={todo.id} className="flex justify-between gap-4">
						<span>{todo.todo}</span>
						<Button
							variant="ghost"
							size="icon-2s"
							onClick={() => handleDelete(todo.id.toString())}
							className="basis-8 flex-none"
						>
							<LucideX className="opacity-20" />
						</Button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodosList;
