import { ReactNode } from 'react'
import styles from './main.module.scss'
export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className={styles.container}>
      {children}
    </main>
  )
}
