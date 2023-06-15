import Link from "next/link"
import styles from './header.module.scss'
import { Navigation } from "@/components/navigation/navigation"
import { navItems } from "@/constants/pages-rout"

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navigation navLinks={navItems}/>
      </div>
    </header>
  )
}
