import React from 'react';
import styles from './styles.module.css';

export const ExtendedFooter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columnsContainer}>
        <div className={styles.column1}>
          <div className={styles.columnTitle}>Support</div>
          <div>Help Center</div>
          <div>AirCover</div>
          <div>Safety information</div>
          <div>Support people with disabilities</div>
          <div>Cancellation options</div>
          <div>Our COVID-19 resposne</div>
          <div>Report a neighborhood concern</div>
        </div>
        <div className={styles.column2}>
          <div className={styles.columnTitle}>Community</div>
          <div>Airbnb.org: disaster relief housing</div>
          <div>Support afghan refugees</div>
          <div>Combating discrimination</div>
        </div>
        <div className={styles.column3}>
          <div className={styles.columnTitle}>Hosting</div>
          <div>Try hosting</div>
          <div>AirCover for Hosts</div>
          <div>Explore hosting resources</div>
          <div>Visit our community forum</div>
          <div>How to host responsibly</div>
        </div>
        <div className={styles.column4}>
          <div className={styles.columnTitle}>Airbnb</div>
          <div>Newsroom</div>
          <div>Learnabout new features</div>
          <div>Letter from our founders</div>
          <div>Careers</div>
          <div>Investors</div>
          <div>Gift cards</div>
        </div>
      </div>
    </div>
  );
};
