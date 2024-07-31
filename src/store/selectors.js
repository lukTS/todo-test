import { createSelector } from '@reduxjs/toolkit';

// Селектор для получения списка задач
export const selectTodos = (state) => state.todos.todos;

// Селектор для получения состояния загрузки
export const selectStatus = (state) => state.todos.status;

// Селектор для получения ошибки
export const selectError = (state) => state.todos.error;

// Селектор для фильтрации задач по поисковому запросу

const selectSearchQuery  = state => state.todos.searchQuery
const selectSearchType  = state => state.todos.searchType

export const selectFiltredTodos = createSelector(
  [selectTodos, selectSearchQuery, selectSearchType],
  (todos, searchQuery, searchType) => {
    //если строка поиска пустая
    if(!searchQuery) return todos
    //если стоит галочка поиск по заголовку и не стоит поиск по тексту
    if (searchType.byTitle && searchType.byText === false && searchQuery) {
      return todos.filter((todo) => todo.nameTodo.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    //если стоит галочка поиск по тексту и не стоит поиск по заголовку
    if (searchType.byText && searchType.byTitle === false && searchQuery) {
      return todos.filter((todo) => todo.textTodo.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    //если стоят обе галочки или обе не стоят
    return todos.filter((todo) =>
      todo.nameTodo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      todo.textTodo.toLowerCase().includes(searchQuery.toLowerCase())
    ) 
  }
)