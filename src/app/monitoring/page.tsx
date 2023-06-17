import { Metadata } from "next";
import styles from './monitoring.module.scss'
import { Currencies } from "@/components/currencies/currencies";
import { CurrencyChoice } from "@/components/currency/currency-choice";

export const metadata: Metadata = {
  title: 'Monitoring | Currencies App',
  description: "The Monitoring page of currencies app"
}

export default function Monitoring() {
  return (
    <div className={styles.monitoring}>
      <Currencies />
      <CurrencyChoice />
    </div>
  )
}
