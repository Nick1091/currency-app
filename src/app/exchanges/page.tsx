import { Metadata } from "next";
import styles from './monitoring.module.scss'
import { Currencies } from "@/components/currencies/currencies";
import { CurrencyChoice } from "@/components/currency/currency-choice";

export const metadata: Metadata = {
  title: 'Exchange Rates | Currencies App',
  description: "The Exchange Rates page of currencies app"
}

export default function Exchanges() {
  return (
    <div className={styles.monitoring}>
      <Currencies />
      <CurrencyChoice />
    </div>
  )
}
