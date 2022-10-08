import React from 'react';
import styles from './styles.module.css';

export const AirCover = () => {
  return (
    <div>
      <div className={styles.airCoverLogo}>
        <div>air</div>
        <div>cover</div>
      </div>
      <div>
        Every booking includes free protection from Host cancellations, listing
        inaccuracies, and other issues like trouble checking in.
      </div>
      <div>
        <a href='/'>Learn more</a>
      </div>
    </div>
  );
};
