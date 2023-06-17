import { ReactNode } from 'react'
import styles from './main.module.scss'
export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className={styles.main}>
      <div  className={styles.container}>
        {children}
      </div>
    </main>
  )
}
