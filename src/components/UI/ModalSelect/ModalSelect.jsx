import React from 'react'
import styles from './ModalSelect.module.css'
import { useDispatch } from 'react-redux'
import { sortTodo } from '../../../store/todoSlice'

export default function ModalSelect({ selectionName, sortListNames }) {
  const dispatch = useDispatch()

  function handleSorting(e) {
    const field = e.target.value
    dispatch(sortTodo({ field }))
  }

  return (
    <div className={styles.container}>
      <div className={styles.sorting}>Sorting</div>
      <select onChange={handleSorting} className={styles.main}>
        <option disabled>{selectionName}</option>
        {sortListNames.map((item) => (
          <option key={item.value} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  )
}