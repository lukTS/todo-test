import React from 'react'
import ModalInput from '../UI/ModalInput/ModalInput'
import { useDispatch, useSelector } from 'react-redux'
import { setNewSearchQuery, setSearchTypeByText, setSearchTypeByTitle } from '../../store/todoSlice'
import styles from './SearchQuery.module.css'
import ModalCheckBox from '../UI/ModalCheckBox/ModalCheckBox'

export default function SearchQuery() {
  const dispatch = useDispatch()
  let dataQuery = useSelector(state => state.todos.searchQuery)
  let searchType = useSelector(state => state.todos.searchType)
  function saveSearchQuery(e) {
    dispatch(setNewSearchQuery({searchQuery: e.target.value}))
  }
  function setCheckBoxByTitle(){
    dispatch(setSearchTypeByTitle({byTitle: !searchType.byTitle}))
  }
  function setCheckBoxByText(){
    dispatch(setSearchTypeByText({byText: !searchType.byText}))
  }

  return (
    <div className={styles.container}>
      <div className={styles.search}>Search</div>
      <ModalCheckBox value = {searchType.byTitle} onChange = {setCheckBoxByTitle} label={'by title  '} />
      <ModalCheckBox value = {searchType.byText} onChange = {setCheckBoxByText} label={'by text  '} />
      <ModalInput 
        className= {styles.main}
        value = {dataQuery} 
        onChange = {saveSearchQuery} 
      />
    </div>
  )
}
