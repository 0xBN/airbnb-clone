import React from 'react';
import styles from './styles.module.css';

export const FeatureIcon = ({ icon, title, details, iconSmall }) => {
  return (
    <div className={styles.container}>
      {!iconSmall && (
        <div className={styles.leftLarge}>
          <span className={`material-symbols-outlined`}>{icon}</span>
        </div>
      )}
      {iconSmall && (
        <div className={styles.leftSmall}>
          <span className={`material-symbols-outlined`}>{icon}</span>
        </div>
      )}
      <div className={styles.right}>
        {!details && <div className={styles.title2}>{title}</div>}
        {details && title && <div className={styles.title}>{title}</div>}
        {details && <div className={styles.details}>{details}</div>}
      </div>
    </div>
  );
};
