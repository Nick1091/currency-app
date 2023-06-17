"use client";

import styles from './output.module.scss'
export const Output = ({result}: {result: string}) => {

  return (
    <div className={styles.outputWrapper}>
      <h4>
        Final currency amount
      </h4>
      <div className={styles.outputInner}>
        <output name="result">{result}</output>
      </div>
    </div>
  );
};
