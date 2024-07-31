import React from 'react'
import styles from './ModalWindow.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { modalWindowOpenClose } from '../../../store/todoSlice'
import { modalWindoIisOpen } from '../../../store/selectors'

export default function ModalWindow({children}) {
  const dispatch = useDispatch()
  const rootClasses = [styles.containerModal]
  let isOpen = useSelector(modalWindoIisOpen)
  if(isOpen) {
    rootClasses.push(styles.active)
  }

  return (
    <div 
      onClick = {() => dispatch(modalWindowOpenClose())} 
      className={rootClasses.join(' ')}
    >
      <div 
        onClick = {(e) => e.stopPropagation()} 
        className={styles.contentModal}
      >
        {children}
      </div>
    </div>
  )
}
