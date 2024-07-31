import React, { useState } from 'react'
import ModalButton from '../UI/ModalButton/ModalButton'
import ModalInput from '../UI/ModalInput/ModalInput'
import { modalWindowOpenClose } from '../../store/todoSlice'
import { addTodo } from '../../store/todosAsyncActions'
import { useDispatch } from 'react-redux'
import styles from './AddTodoForm.module.css'

export default function AddTodoForm() {
  const [nameTodo, setNameTodo] = useState('')
  const [textTodo, setTextTodo] = useState('')
  const dispatch = useDispatch()
  function closeWindows() {
    dispatch(modalWindowOpenClose())
  }
  function addTodoHandler(e) {
    e.preventDefault()
    dispatch(addTodo({nameTodo, textTodo}))
    closeWindows()
    setNameTodo('')
    setTextTodo('')
  }

  return (
    <form onSubmit={addTodoHandler}>
      <div className = {styles.addForm} >
        <div className={styles.close} onClick={closeWindows}></div>
      </div>
      <ModalInput 
        value = {nameTodo} 
        type='text' 
        placeholder='Title' 
        onChange = {(e) => setNameTodo(e.target.value)}
      />
      <ModalInput 
        value = {textTodo}
        type='text' 
        placeholder='description text' 
        onChange = {(e) => setTextTodo(e.target.value)}
      />
      <ModalButton type='submit'>Save</ModalButton>
    </form>
  )
}
