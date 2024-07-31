import React from 'react'
import styles from './ModalButton.module.css'

export default function ModalButton( {children, ...props}) {
  return (
    <button {...props} className={styles.newButton}>
      {children}
    </button>
  )
}
