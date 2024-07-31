import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoItem from '../todoItem/TodoItem'
import styles from './TodoList.module.css'
import ModalButton from '../UI/ModalButton/ModalButton'
import { modalWindowOpenClose, fetchTodos } from '../../store/todoSlice'
import { selectFiltredTodos } from '../../store/selectors'

export default function TodoList() {
  const dispatch = useDispatch()
  const todosList = useSelector(selectFiltredTodos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch]);

  function addTodoList(e) {
    e.preventDefault();
    dispatch(modalWindowOpenClose())
  }

  return (
    <div className={styles.container}>
      {todosList.length ? (
        todosList.map((todo, index) => (
          <TodoItem 
            key={todo.id}
            index={index} 
            id={todo.id}
            nameTodo={todo.nameTodo}
            textTodo={todo.textTodo}
          />
        ))
      ) : (
        <h1>There are no entries in the list</h1>
      )}
      <ModalButton onClick={addTodoList}>Create</ModalButton>
    </div>
  )
}