import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { todos } from "@/db/todos";
import { RootState } from "@/store/store";

export type Todo = {
	id: string | number;
	todo: string;
	completed: boolean;
	userId: string | number;
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
				userId: 20,
				createdDate: Date.now(),
			};
			state.todos.push(newTodo);
		},
	},
});

export const { addTodo } = todosSlice.actions;
export const selectTodos = (state: RootState) => state.todos.todos;
export default todosSlice.reducer;
