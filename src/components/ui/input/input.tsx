"use client";
import styles from './input.module.scss'
export const Input = () => {

  return (
    <div className={styles.numberInput}>
      <h4>Input amount of currency</h4>
      <input type="number" name="number" autoComplete="off" required/>
    </div>
  );
};
