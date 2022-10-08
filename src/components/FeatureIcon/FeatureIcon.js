import React from 'react';
import styles from './styles.module.css';

export const FeatureIcon = ({ icon, title, details }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <span className={`material-symbols-outlined`}>{icon}</span>
      </div>
      <div className={styles.right}>
        {!details && <div className={styles.title2}>{title}</div>}
        {details && <div className={styles.title}>{title}</div>}
        {details && <div className={styles.details}>{details}</div>}
      </div>
    </div>
  );
};
