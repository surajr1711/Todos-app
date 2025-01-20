import type { TodoDocument } from "@/features/todos/api/apiSlice";
import { Button } from "../../components/ui/button";
import { LucideX } from "lucide-react";
import { Checkbox } from "../../components/ui/checkbox";
import { useDeleteTodoMutation, useToggleTodoMutation, useEditTodoMutation } from "./api/apiSlice";
import { ChangeEvent, FormEvent, KeyboardEventHandler, useEffect, useRef, useState } from "react";

const TodoItem = ({ todo }: { todo: TodoDocument }) => {
	const [isChecked, setIsChecked] = useState(todo.done);
	const [deleteTodo] = useDeleteTodoMutation();
	const [toggleTodo] = useToggleTodoMutation();
	const [editTodo] = useEditTodoMutation();
	const [text, setText] = useState(todo.text);
	const textRef = useRef<HTMLTextAreaElement | null>(null);
	const formRef = useRef<HTMLFormElement | null>(null);

	const handleClick = async () => {
		const payload = {
			_id: todo._id,
			done: !isChecked,
		};
		await toggleTodo(payload);
		setIsChecked(!isChecked);
	};

	// TODO: too many click event handlers. Remove click events from <li>. Put on <ul> then trace click event target parent key.
	const handleDelete = async () => {
		await deleteTodo(todo._id);
		console.log("deleted");
	};

	const setTextAreaHeight = () => {
		const textarea = textRef.current!;
		textarea.style.height = "auto"; // reset height
		textarea.style.height = `${textarea.scrollHeight}px`; // to calculate scrollheight
	};

	// set textarea correct height on first load
	useEffect(() => {
		setTextAreaHeight();
	}, []);

	// TODO: replace event with ref
	const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const textarea = e.target;
		// adjust textarea height as you input
		setTextAreaHeight();
		setText(textarea.value);
	};

	const submitEditedTodo = async () => {
		if (text.trim()) {
			const payload = {
				_id: todo._id,
				text: text.trim(),
			};
			await editTodo(payload);
		}
		textRef.current!.blur();
	};

	const handleKeyDown: KeyboardEventHandler = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			// TODO: ignore submission if textarea text is the same as initialtext when the component was loaded.
			submitEditedTodo();
		}
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		submitEditedTodo();
	};

	return (
		<li
			className="group flex justify-between gap-5 align-items-center"
			// ref={setNodeRef}
			// style={style}
			// {...attributes}
			// {...listeners}
		>
			<Checkbox checked={isChecked} onClick={handleClick} className="flex-none mt-1" />

			{/* // ??: use form with textarea only when you focus on li?? */}
			<form ref={formRef} onSubmit={handleSubmit} className="flex-grow">
				<textarea
					ref={textRef}
					className="h-auto w-full bg-transparent resize-none overflow-hidden focus:outline-none"
					rows={1}
					onInput={handleInput}
					onKeyDown={handleKeyDown}
					value={text}
				/>
			</form>

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

export const DoneItem = ({ todo }: { todo: TodoDocument }) => {
	const [isChecked, setIsChecked] = useState(todo.done);
	const [deleteTodo] = useDeleteTodoMutation();
	const [toggleTodo] = useToggleTodoMutation();

	const handleClick = async () => {
		const payload = {
			...todo,
			done: !isChecked,
		};
		await toggleTodo(payload);
		setIsChecked(!isChecked);
	};

	// TODO: too many click event handlers. Remove click events from <li>. Put on <ul> then trace click event target parent key.
	const handleDelete = async () => {
		await deleteTodo(todo._id);
		console.log("deleted");
	};

	return (
		<li className="opacity-25 group flex justify-between gap-5 align-items-center">
			<Checkbox checked={isChecked} onClick={handleClick} className="flex-none mt-1" />

			<span className="flex-grow line-through">{todo.text}</span>

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
