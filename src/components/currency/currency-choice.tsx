'use client'
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { setCurrency } from "@/store/reducers/currency-slice"
import styles from './currency.module.scss'
import { useState } from "react"

export const CurrencyChoice = () => {
  const {currencies, currentCurrency, isLoaded} = useAppSelector(state => state.reducer); 

  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (currency: string) => {
    dispatch(setCurrency(currency));
    setIsOpen(false);
  };

  return (
    <div className={styles.selectWrapper}>
      <h4>Select base currency</h4>
      <div
        className={`${styles.select} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.selectedOption}>
          {currentCurrency}
        </div>
        {isOpen && (
          <ul className={styles.options}>
            {currencies.map((currency: CurrenciesList) => (
              <li
                key={currency.ID}
                className={styles.option}
                onClick={() => handleSelect(currency.CharCode)}
              >
                {currency.Name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
