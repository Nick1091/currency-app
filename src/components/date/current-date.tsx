import { getCurrentDate } from '@/helper/helper';
import styles from './current-date.module.scss'

export const CurrentDate = () => {
  const date = getCurrentDate();
  return (
    <div className={styles.dateWrapper}>
      <h3>{date}</h3>
    </div>
  )
}
