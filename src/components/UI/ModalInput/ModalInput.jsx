import styles from "./ModalInput.module.css"

export default function ModalInput ({...props}) {
  return (
    <>
      <input className={styles.modalImput} {...props} />
    </>
  )
}