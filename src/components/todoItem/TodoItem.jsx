import React from 'react'
import styles from './TodoItem.module.css'
import ModalButton from '../UI/ModalButton/ModalButton'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../store/todosAsyncActions'

export default function TodoItem({ index, nameTodo, textTodo, id }) {
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <div className={styles.containerBlock}>
        <div className={styles.containerNumberName}>
          <p className={styles.blockNumbeName}>{index + 1}.</p>
          <p className={styles.blockNumbeName}>{nameTodo}</p>
        </div>
        <p className={styles.blockp}>{textTodo}</p>
      </div>
      <ModalButton onClick={() => dispatch(deleteTodo(id))}>Del</ModalButton>
    </div>
  )
}