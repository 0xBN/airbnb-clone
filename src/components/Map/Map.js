import React from 'react';
import styles from './styles.module.css';

export const Map = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  console.log(apiKey);
  return (
    <div>
      <h1 className={styles.test}>Map</h1>
    </div>
  );
};
