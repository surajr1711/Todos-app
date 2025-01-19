import type { Todo } from "@/features/todos/api/apiSlice";
import { Button } from "../../components/ui/button";
import { LucideX } from "lucide-react";
import { Checkbox } from "../../components/ui/checkbox";
import { useDeleteTodoMutation, useToggleTodoMutation } from "./api/apiSlice";
import { useState } from "react";

export const TodoItem = ({ todo }: { todo: Todo }) => {
	const [isChecked, setIsChecked] = useState(todo.completed);
	const [deleteTodo] = useDeleteTodoMutation();
	const [toggleTodo] = useToggleTodoMutation();

	const handleClick = async () => {
		const toggledTodo = {
			...todo,
			completed: !isChecked,
		};
		await toggleTodo(toggledTodo);
		setIsChecked(!isChecked);
	};

	// TODO: too many click event handlers. Remove click events from <li>. Put on <ul> then trace click event target parent key.
	const handleDelete = async () => {
		await deleteTodo(todo.id);
		console.log("deleted");
	};

	return (
		<li
			className={`${todo.completed && "opacity-25 line-through"} group flex justify-between gap-5 align-items-center`}
		>
			<Checkbox checked={isChecked} onClick={handleClick} className="flex-none mt-1" />

			<span className="flex-grow">{todo.todo}</span>

			<Button
				variant="ghost"
				size="icon-2s"
				onClick={() => handleDelete()}
				className="invisible basis-8 flex-none group-hover:visible"
			>
				<LucideX className="text-gray-500" />
			</Button>
		</li>
	);
};

export default TodoItem;
