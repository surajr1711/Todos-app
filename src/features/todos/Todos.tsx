// import { selectTodos } from "@/features/todos/todosSlice";
// import TodosList from "./TodosList";
// import { useAppSelector } from "@/store/hooks";
import {
	useGetTodosQuery,
	// useGetTodoQuery,
	// useAddTodoMutation,
	//  useUpdateTodoMutation,
	//   useDeleteTodoMutation
} from "./api/apiSlice";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const Todos = () => {
	const { data: todos, isLoading, isSuccess, isError, error } = useGetTodosQuery();
	// const [addTodo] = useAddTodoMutation()
	// const [updateTodo] = useUpdateTodoMutation()
	// const [deleteTodo] = useDeleteTodoMutation()

	// const todos = useAppSelector(selectTodos);
	// const incompleteTodos = todos.filter((todo) => !todo.completed);
	// const completeTodos = todos.filter((todo) => todo.completed);

	let content;
	if (isLoading) {
		content = <p>Loading...</p>;
	} else if (isSuccess) {
		// content = JSON.stringify(todos);
		content = (
			<section>
				<div className="mb-8">
					<h1 className="text-lg font-semibold sr-only">To do</h1>
					<ul className="flex flex-col gap-4">
						{todos
							.filter((todo) => !todo.completed)
							.map((todo) => (
								<TodoItem key={todo.id} todo={todo} />
							))}
					</ul>
				</div>

				<div>
					<h2 className="font-semibold mb-4">Done</h2>
					<ul className="flex flex-col gap-4">
						{todos
							.filter((todo) => todo.completed)
							.map((todo) => (
								<TodoItem key={todo.id} todo={todo} />
							))}
					</ul>
				</div>
			</section>
		);
	} else if (isError) {
		content = <p>{error.toString()}</p>;
	}

	return (
		<div className="flex flex-col gap-4 max-w-sm mx-auto">
			<AddTodo />
			{content}

			{/* Pinned todos */}

			{/* Incomplete todos */}
			{/* <TodosList todos={incompleteTodos} /> */}

			{/* Complete todos */}
			{/* <div>
				<h2 className="text-lg font-medium">Completed</h2>
				<TodosList todos={completeTodos} />
			</div> */}
		</div>
	);
};

export default Todos;
