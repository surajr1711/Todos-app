import { Input } from "../../components/ui/input";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAddTodoMutation } from "./api/apiSlice";

const AddTodo = () => {
	const [input, setInput] = useState("");
	const [addTodo, { isError, error }] = useAddTodoMutation();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	// ??: debounce. prevent multiple submits. allow only 1 submit per second.
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (input.trim()) {
			const newTodo = {
				id: crypto.randomUUID(),
				todo: input.trim(),
				completed: false,
				// TODO: change this based on loggedin user. right now its manually set to an arbitrary userId 20.
				userId: "20",
				createdDate: Date.now(),
			};
			await addTodo(newTodo);
		}
		setInput("");
	};

	return (
		<div className="">
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<Input type="text" placeholder="Type todo then hit enter" value={input} onChange={handleChange} />
			</form>
			<span className="h-8 block text-sm text-red-800">{isError && `Error: Could not add todo. ${error}`}</span>
		</div>
	);
};

export default AddTodo;
