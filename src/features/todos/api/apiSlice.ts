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
			// Optimistic update to add a todo
			async onQueryStarted(todo, { dispatch, queryFulfilled }) {
				const tempId = crypto.randomUUID();
				const tempCreatedAt = new Date();
				const tempUpdatedAt = tempCreatedAt;

				const optimisticTodo: TodoDocument = {
					...todo,
					_id: tempId,
					createdAt: tempCreatedAt,
					updatedAt: tempUpdatedAt,
				};

				const patchResult = dispatch(
					todosApiSlice.util.updateQueryData("getTodos", undefined, (draft) => {
						draft.push(optimisticTodo);
					})
				);

				try {
					const { data: serverTodo } = await queryFulfilled;
					dispatch(
						todosApiSlice.util.updateQueryData("getTodos", undefined, (draft) => {
							// find the index of optimisitic todo that we just added to the cache
							const index = draft.findIndex((t) => t._id === tempId);
							// if its found replace the optimistic todo with the new one (containing the correct mongodb_id and timestamps) that returned from the server.
							if (index !== -1) {
								draft[index] = serverTodo;
							}
						})
					);
				} catch {
					patchResult.undo();
				}
			},
		}),

		deleteTodo: builder.mutation<Todo, string>({
			query: (id) => ({
				url: `/todos/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Todos"],
			// Optimistic update
			async onQueryStarted(id, { dispatch, queryFulfilled }) {
				const patchResult = dispatch(
					todosApiSlice.util.updateQueryData("getTodos", undefined, (draft) => {
						return draft.filter((todo) => todo._id !== id);
					})
				);
				try {
					await queryFulfilled;
				} catch {
					patchResult.undo();
				}
			},
		}),

		toggleTodo: builder.mutation<TodoDocument, { _id: string; done: boolean }>({
			query: (payload) => ({
				url: `/todos/${payload._id}`,
				method: "PATCH",
				body: { done: payload.done },
			}),
			invalidatesTags: ["Todos"],
			// Optimistic update to toggle todo
			async onQueryStarted(payload, { dispatch, queryFulfilled }) {
				const patchResult = dispatch(
					todosApiSlice.util.updateQueryData("getTodos", undefined, (draft) => {
						const todoToUpdate = draft.find((t) => t._id === payload._id);
						if (todoToUpdate) {
							todoToUpdate.done = !todoToUpdate.done;
						}
					})
				);
				try {
					await queryFulfilled;
				} catch {
					patchResult.undo();
				}
			},
		}),

		editTodo: builder.mutation<TodoDocument, { _id: string; text: string }>({
			query: (payload) => ({
				url: `/todos/${payload._id}`,
				method: "PATCH",
				body: { text: payload.text },
			}),
			invalidatesTags: ["Todos"],
			// Optimistic update to edit a todo
			async onQueryStarted(payload, { dispatch, queryFulfilled }) {
				const patchResult = dispatch(
					todosApiSlice.util.updateQueryData("getTodos", undefined, (draft) => {
						const todoToUpdate = draft.find((todo) => todo._id === payload._id);
						if (todoToUpdate) {
							todoToUpdate.text = payload.text;
						}
					})
				);
				try {
					await queryFulfilled;
				} catch {
					patchResult.undo();
				}
			},
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
