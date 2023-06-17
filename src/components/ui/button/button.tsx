"use client";

import styles from './button.module.scss';
export const Button = ({type}: {type: "button" | "submit" | "reset"}) => {

  return (
    <div className={styles.buttonWrapper}>
      <button type={type}>{type.toLocaleUpperCase()}</button>
    </div>
  );
};
