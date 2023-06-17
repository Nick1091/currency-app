import Link from "next/link"
import styles from './header.module.scss'
import { Navigation } from "@/components/navigation/navigation"
import { navItems } from "@/constants/pages-rout"

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav>
          <Navigation navLinks={navItems}/>
        </nav>
      </div>
    </header>
  )
}
