import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axiosConfig';

// Асинхронное действие для получения списка задач
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('/todos');
  return response.data;
});

// Асинхронное действие для добавления новой задачи
export const addTodo = createAsyncThunk('todos/addTodo', async (todo) => {
  const response = await axios.post('/todos', todo);
  return response.data;
});

// Асинхронное действие для удаления задачи
export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await axios.delete(`/todos/${id}`);
  return id;
});