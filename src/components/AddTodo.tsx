import { Input } from "./ui/input";
import { Button } from "./ui/button";

const AddTodo = () => {
	return (
		<div className="mb-8">
			<h1 className="text-xl font-medium">Add todo</h1>
			<form className="p-4 border rounded-md flex flex-col gap-4">
				<Input type="text" />
				<Button>Test</Button>
			</form>
		</div>
	);
};

export default AddTodo;
