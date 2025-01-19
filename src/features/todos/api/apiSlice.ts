import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Todo = {
	id: string;
	todo: string;
	done: boolean;
	userId: string;
	createdDate: number;
};

export const todosApiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
	tagTypes: ["Todos"],
	endpoints: (builder) => ({
		getTodos: builder.query<Todo[], void>({
			query: () => "/todos",
			transformResponse: (res: Todo[]) => res.sort((a, b) => b.createdDate - a.createdDate),
			providesTags: ["Todos"],
		}),
		addTodo: builder.mutation<Todo, Todo>({
			query: (newTodo) => ({
				url: "/todos",
				method: "POST",
				body: newTodo,
			}),
			invalidatesTags: ["Todos"],
		}),
		deleteTodo: builder.mutation<Todo, string>({
			query: (id) => ({
				url: `/todos/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Todos"],
		}),
		toggleTodo: builder.mutation<Todo, Todo>({
			query: (toggledTodo) => ({
				url: `/todos/${toggledTodo.id}`,
				method: "PATCH",
				body: toggledTodo,
			}),
			invalidatesTags: ["Todos"],
		}),
		editTodo: builder.mutation<Todo, Todo>({
			query: (editedTodo) => ({
				url: `/todos/${editedTodo.id}`,
				method: "PATCH",
				body: editedTodo,
			}),
			invalidatesTags: ["Todos"],
		}),
		/* 		getTodo: builder.query<Todo, string>({
			query: (id) => `/todos/${id}`,
		}),

				// search todo
				// reorderTodo
				// pinLists not todos
				// tagTodo
				// completedDate and modifiedDate
				// addDueDate
				// addReminder
				// addToProject (Project)
		*/
	}),
});

export const {
	useGetTodosQuery,
	useAddTodoMutation,
	useDeleteTodoMutation,
	useEditTodoMutation,
	// useGetTodoQuery,
	useToggleTodoMutation,
} = todosApiSlice;
