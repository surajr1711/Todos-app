import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { todos } from "@/db/todos";
import { RootState } from "@/store/store";

export type Todo = {
	id: string;
	todo: string;
	completed: boolean;
	userId: string;
	createdDate: number;
};

const todosSlice = createSlice({
	name: "todos",
	initialState: { todos },
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			const newTodo: Todo = {
				id: crypto.randomUUID(),
				todo: action.payload,
				completed: false,
				// TODO: change this based on loggedin user. right now its manually set to an arbitrary userId 20.
				userId: "20",
				createdDate: Date.now(),
			};
			state.todos.push(newTodo);
		},
		deleteTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		// completeTodo
		// editTodo
		// reorderTodo
		// pinTodo
		// tagTodo
		// addDueDate
		// addReminder
		// addToProject (Project)
	},
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export const selectTodos = (state: RootState) => state.todos.todos;
export default todosSlice.reducer;
