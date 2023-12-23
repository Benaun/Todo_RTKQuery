import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
    reducerPath: 'todosApi',
    tagTypes: ['Todos'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/'}),
    endpoints: (build) => ({
        getTodos: build.query({
            query: () => ({
                url: 'todos'
            }),
            providesTags: ['Todos']
        }),
        deleteTodo: build.mutation({
            query: (id) => ({
                method: 'DELETE',
                url: `todos/${id}`
            }),
            invalidatesTags: ['Todos']
        }),
        addNewTodo: build.mutation({
            query: (todo) => ({
                method: 'POST',
                url: 'todos',
                body: todo
            }),
            invalidatesTags: ['Todos']
        }),
        toggleComplete: build.mutation({
            query: (todo) => ({
                method: 'PATCH',
                url: `todos/${todo.id}`,
                body: todo
            }),
            invalidatesTags: ['Todos']
        })
    })
});

export const {useGetTodosQuery, useAddNewTodoMutation, useDeleteTodoMutation, useToggleCompleteMutation} = todosApi;