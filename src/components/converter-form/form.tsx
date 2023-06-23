"use client";

import { getDateId, getResult } from "@/helper/helper";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchCurrencies, setDateId, currencySelectors } from "@/store/reducers/currency-slice";
import { FormEventHandler, useEffect, useRef, useState } from "react";
import { SelectLabel, Input, Output, Button } from "../ui";
import styles from './form.module.scss'
import { Loader } from "../loader/loader";

export const Form = () => {

  const [result, setResult] = useState('');
  const dispatch = useAppDispatch();
  const currencies = useAppSelector(currencySelectors.selectAll); 
  const initTypeEntity = useAppSelector(state => currencySelectors.selectById(state, 'R01090B')); 
  const {dateId, isLoaded} = useAppSelector(state => state.reducer); 
  const curRef = useRef(false);

  useEffect(() => {
    if(curRef.current === false){
      const dateIdNow = getDateId()
      if(dateIdNow !== dateId) {
        dispatch(fetchCurrencies())
        dispatch(setDateId(dateIdNow))
      } 
    }
    return () => {
      curRef.current = true
    }
  }, [])
   
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    getResult({currencies, formData, setResult})
  };

  return ( 
    <>
      {isLoaded ? <Loader/> : 
        (<form onReset={()=>{setResult('')}} 
          onSubmit={ handleSubmit } 
          className={styles.form}
          >
          <div className={styles.select} >
            <SelectLabel name={'initial'}/>
            <Input/>
            <SelectLabel name={'final'}/>
          </div>
            <Output result = {result}/>
          <div className={styles.buttons}>
            <Button type={'submit'}/>
            <Button type={'reset'}/>
          </div>
        </form>)
      }
    </>
  );
};
