'use client'

import { useCallback, useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { getDateId } from "@/helper/helper"
import { fetchCurrencies, setDateId } from "@/store/reducers/currency-slice"
import { Loader } from '../loader/loader'
import styles from './currencies.module.scss'


export const Currencies = () => {
  const [isLoad, setLoad] = useState(true);
  const {currencies, dateId, currentCurrency, isLoaded} = useAppSelector(state => state.reducer); 
  const [rate, setRate] = useState<CurrenciesList[]>(currencies);
  const dispatch = useAppDispatch();

  const getCurrenciesRate = useCallback(()=> {
    const currencyValue = currencies.find(currency => {
      return currency.CharCode === currentCurrency
    })
    if(currencyValue) {
      return currencies.map(currency => {
        const newValue = currency.Value / currency.Nominal / currencyValue.Value;
        return {...currency, Value: +newValue.toFixed(4) };
      })
    } else {
      return []
    }
  }, [currencies, currentCurrency])

  const curRef = useRef(false);

  useEffect(() => {
    if(curRef.current === false){
      const dateIdNow = getDateId()
      if(dateIdNow !== dateId) {
        dispatch(fetchCurrencies())
        dispatch(setDateId(dateIdNow))
      } 
      const currenciesRate = getCurrenciesRate()
      setRate(currenciesRate);
      if(currencies && isLoaded === false) setLoad(false);

    }
 
    return () => {
      curRef.current = false
    }
  }, [dispatch, dateId, getCurrenciesRate, currentCurrency])
  return (
    <div className={styles.CurrenciesWrapper}>
      {isLoad  ? <Loader/> : 
        <table>
          <tbody>
            {rate.map((currency: CurrenciesList) => (
              <tr key={currency.ID}>
                <td>{currency.CharCode}</td> 
                <td>{currency.Name}</td>
                <td>{currency.Value}</td>
                <td>{currentCurrency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  )
}
