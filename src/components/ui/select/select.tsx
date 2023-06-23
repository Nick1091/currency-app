"use client";

import { useAppSelector } from "@/hooks/redux";
import styles from './select.module.scss';
import { currencySelectors } from "@/store/reducers/currency-slice";

export const SelectLabel = ({name}: {name: string}) => {
  const currencies = useAppSelector(currencySelectors.selectAll); 

  return (
    <div className={styles.wrapper}>
      <h4>Select {name} currency</h4>
      <select size={5} id={name} name={name} defaultValue='R01010'>
          {currencies.map((currency: CurrenciesList) => (
            <option key={currency.ID} value={currency.ID}>
              {currency.Name}
            </option>
          ))}
      </select>
    </div>
  );
};
