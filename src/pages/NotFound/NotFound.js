import React from 'react';
import styles from './styles.module.css';

export const NotFound = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.oopsTitle}>Oops!</h1>
          <div>We can't seem to find the page you're looking for.</div>
          <br />
          <div>Error code: 404</div>
          <br />
          <div>Here are some helpful links instead:</div>
          <div>Home</div>
          <div>Search</div>
          <div>Help</div>
          <div>Traveling on Airbnb</div>
          <div>Hosting on Airbnb</div>
          <div>Trust & Safety</div>
        </div>
        <div>
          <img src='https://bit.ly/3ROVAK6' alt='' />
        </div>
      </div>
      <hr />
      <div>© 2022 Airbnb, Inc. All rights reserved.</div>
    </div>
  );
};
