'use client'
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { currencySelectors, setCurrency } from "@/store/reducers/currency-slice"
import styles from './currency.module.scss'
import { useState } from "react"

export const CurrencyChoice = () => {
  const currencies = useAppSelector(currencySelectors.selectAll); 
  const {currentCurrency, isLoaded} = useAppSelector(state => state.reducer); 

  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleSelect = (currency: string) => {
    dispatch(setCurrency(currency));
    setIsOpen(false);
  };
  
  if (isLoaded) {
    return null;
  }
  return (
    <div className={styles.selectWrapper}>
      <h4>Select base currency</h4>
      <div
        className={`${styles.select} ${isOpen ? styles.open : styles.closed}`}
        onClick={() => {
          setIsOpen(!isOpen)
          setIsOpened(true)
          }
        }
      >
        <div className={styles.selectedOption}>
          {currentCurrency}
        </div>
          <ul className={`${styles.options} ${!isOpened ? styles.withoutHeight : styles.withHeight}`}>
            {currencies.map((currency: CurrenciesList) => (
              <li
                key={currency.ID}
                className={(currency.CharCode === currentCurrency) ? styles.active : ''}
                onClick={(e) =>{
                  e.stopPropagation();
                  handleSelect(currency.CharCode)}
                } 
              >
                {currency.Name}
              </li>
            ))}
          </ul>
      </div>
    </div>
  )
}
