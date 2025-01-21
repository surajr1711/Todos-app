import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Todo {
	text: string;
	done: boolean;
	// userId: string;
	// dueDate: Date
	// doneDate: Date
	// sortOrder: number
}

// Type of mongodb returned document
export interface TodoDocument extends Todo {
	_id: string;
	createdAt: Date;
	updatedAt: Date;
}

export const todosApiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_SERVER_URI}` }),
	tagTypes: ["Todos"],
	endpoints: (builder) => ({
		getTodos: builder.query<TodoDocument[], void>({
			query: () => "/todos",
			// transformResponse: (res: Todo[]) => res.sort((a, b) => b.createdDate - a.createdDate),
			providesTags: ["Todos"],
		}),
		addTodo: builder.mutation<TodoDocument, Todo>({
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
		toggleTodo: builder.mutation<TodoDocument, { _id: string; done: boolean }>({
			query: (payload) => ({
				url: `/todos/${payload._id}`,
				method: "PATCH",
				body: { done: payload.done },
			}),
			invalidatesTags: ["Todos"],
		}),
		editTodo: builder.mutation<TodoDocument, { _id: string; text: string }>({
			query: (payload) => ({
				url: `/todos/${payload._id}`,
				method: "PATCH",
				body: { text: payload.text },
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
	useToggleTodoMutation,
	useEditTodoMutation,
	// useGetTodoQuery,
} = todosApiSlice;
