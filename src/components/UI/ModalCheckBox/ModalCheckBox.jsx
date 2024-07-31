import React from 'react'
import styles from './ModalCheckBox.module.css' 

export default function ModalCheckBox({label, value, ...props}) {
  return (
  <>
  <label>
    {label}
    <input className = {styles.main} type = 'checkbox' {...props} checked = {value} />
  </label>
  </>
  )
}
