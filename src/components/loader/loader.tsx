import styles from './loader.module.scss'

export const Loader = () => {
  return(
    <div className={styles.mask}>
      <div className={styles.loader}>
      </div>
    </div>
  )
}
