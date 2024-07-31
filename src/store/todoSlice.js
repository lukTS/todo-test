import { createSlice } from '@reduxjs/toolkit'

import {fetchTodos, addTodo, deleteTodo} from './todosAsyncActions'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    modalWindow: false,
    sortListNames: [
      { title: 'By title', value: 'nameTodo' },
      { title: 'By text', value: 'textTodo' }
    ],
    searchQuery: '',
    searchType: { byTitle: false, byText: false },
    status: 'idle',
    error: null
  },
  reducers: {
    modalWindowOpenClose(state) {
      state.modalWindow = !state.modalWindow;
    },
    sortTodo(state, action) {
      state.todos = [...state.todos].sort((a, b) =>
        a[action.payload.field].localeCompare(b[action.payload.field])
      );
    },
    setNewSearchQuery(state, action) {
      state.searchQuery = action.payload.searchQuery
    },
    setSearchTypeByTitle(state, action) {
      state.searchType.byTitle = action.payload.byTitle
    },
    setSearchTypeByText(state, action) {
      state.searchType.byText = action.payload.byText
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.todos = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload)
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload)
      })
  }
})

export const {
  modalWindowOpenClose,
  sortTodo,
  setNewSearchQuery,
  setSearchTypeByTitle,
  setSearchTypeByText
} = todoSlice.actions;

export default todoSlice.reducer