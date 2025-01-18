import { useAppDispatch } from "@/store/hooks";
import { Input } from "./ui/input";
// import { Button } from "./ui/button";
import { ChangeEvent, FormEvent, useState } from "react";
import { addTodo } from "@/features/todos/todosSlice";

const AddTodo = () => {
	const [input, setInput] = useState("");
	const dispatch = useAppDispatch();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (input.trim()) {
			dispatch(addTodo(input));
		}
		setInput("");
	};
	return (
		<div className="">
			{/* <h1 className="text-xl font-medium">Add todo</h1> */}
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<Input type="text" placeholder="Type todo then hit enter" value={input} onChange={handleChange} />
				{/* <Button>Submit</Button> */}
			</form>
		</div>
	);
};

export default AddTodo;
