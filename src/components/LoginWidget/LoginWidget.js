import React from 'react';
import styles from './styles.module.css';

export const LoginWidget = () => {
  return (
    <div className={styles.container}>
      <div>Become a Host</div>
      <div>
        <span className='material-symbols-outlined'>language</span>
      </div>
      <div className={styles.profileButton}>
        <span id='cat' className='material-symbols-outlined'>
          menu
        </span>
        <span className='material-symbols-outlined'>account_circle</span>
      </div>
    </div>
  );
};
