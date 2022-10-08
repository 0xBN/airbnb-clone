import React from 'react';
import styles from './styles.module.css';

export const SearchWidget = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonLeft}>Anywhere</button>
        <div className={styles.verticalLine}>|</div>
        <button className={styles.buttonMiddle}>Any week</button>
        <div className={styles.verticalLine}>|</div>
        <button className={[styles.buttonRight, styles.lighter].join(' ')}>
          <div>Add guests</div>
          <div className={styles.searchButton}>
            <span className='material-symbols-outlined'>search</span>
          </div>
        </button>
      </div>
    </div>
  );
};
