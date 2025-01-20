import {
	// Todo,
	useGetTodosQuery,
} from "./api/apiSlice";
import AddTodo from "./AddTodo";
import TodoItem, { DoneItem } from "./TodoItem";
// import { DndContext, DragEndEvent } from "@dnd-kit/core";
// import { arrayMove, SortableContext } from "@dnd-kit/sortable";
// import { useEffect, useState } from "react";

const Todos = () => {
	const { data: todos, isLoading, isSuccess, isError, error } = useGetTodosQuery();

	/* 	const [todosDnd, setTodosDnd] = useState();

	useEffect(() => {
		setTodosDnd(todos);
	}, [isSuccess, todos]); */

	if (isLoading) {
		return <p>Loading...</p>;
	} else if (isError) {
		return <p>{error.toString()}</p>;
	}

	/* const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;

		if (active.id !== over.id) {
			setTodosDnd((items) => {
				const oldIndex = items?.indexOf(active.id);
				const newIndex = items?.indexOf(over.id);

				return arrayMove(items, oldIndex, newIndex);
			});
		}
	}; */

	return (
		<div className="flex flex-col gap-4 max-w-sm mx-auto">
			<AddTodo />

			{isSuccess && (
				<section>
					<div className="mb-8">
						<h1 className="text-lg font-semibold sr-only">To do</h1>
						<ul className="flex flex-col gap-4">
							{/* <DndContext onDragEnd={handleDragEnd}> */}
							{/* <SortableContext items={todos}> */}
							{todos
								.filter((todo) => !todo.done)
								.map((todo) => (
									<TodoItem key={todo._id} todo={todo} />
								))}
							{/* </SortableContext> */}
							{/* </DndContext> */}
						</ul>
					</div>

					<div>
						<h2 className="font-semibold mb-4 opacity-25">Done</h2>
						<ul className="flex flex-col gap-4">
							{todos
								.filter((todo) => todo.done)
								.map((todo) => (
									<DoneItem key={todo._id} todo={todo} />
								))}
						</ul>
					</div>
				</section>
			)}
		</div>
	);
};

export default Todos;
