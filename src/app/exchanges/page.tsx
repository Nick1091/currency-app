import { Metadata } from "next";
import styles from './monitoring.module.scss'
import { Currencies } from "@/components/currencies/currencies";
import { CurrencyChoice } from "@/components/currency/currency-choice";
import { CurrentDate } from "@/components/date/current-date";

export const metadata: Metadata = {
  title: 'Exchange Rates | Currencies App',
  description: "The Exchange Rates page of currencies app"
}

export default function Exchanges() {
  return (
    <div className={styles.monitoring}>
      <Currencies />
      <div>
        <CurrencyChoice />
        <CurrentDate/>
      </div>
    </div>
  )
}
