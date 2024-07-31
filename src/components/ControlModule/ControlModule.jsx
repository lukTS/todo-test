import React from 'react'
import ModalSelect from '../UI/ModalSelect/ModalSelect'
import { useSelector } from 'react-redux'
import SearchQuery from '../SearchQuery/SearchQuery'
import styles from './ControlModule.module.css'

export default function ControlModule() {
  
  const sortListNames = useSelector(state => state.todos.sortListNames)
  return (
    <div className={styles.container}>
      <ModalSelect 
        selectionName ={'Select sorting method'} 
        sortListNames = {sortListNames}
      />
      <SearchQuery />
    </div>
  )
}
