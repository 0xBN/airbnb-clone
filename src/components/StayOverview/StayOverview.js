import React from 'react';
import styles from './styles.module.css';

export const StayOverview = ({
  stayType,
  hostName,
  guestCapacity,
  bedroomCount,
  bedCount,
  bathCount,
  pic,
}) => {
  return (
    <div>
      <div className={styles.capacityAndHost}>
        <div className={styles.leftCapacityAndHost}>
          <div className={styles.sectionTitle}>
            Entire {stayType} hosted by {hostName}
          </div>
          <div className={styles.capacityDetails}>
            <div>{guestCapacity} guests</div>
            <div>·</div>
            <div>
              {bedroomCount} bedroom{bedroomCount > 1 ? 's' : null}
            </div>
            <div>·</div>
            <div>
              {bedCount} bed{bedCount > 1 ? 's' : null}
            </div>
            <div>·</div>
            <div>
              {bathCount} bath{bathCount > 1 ? 's' : null}
            </div>
          </div>
        </div>
        <div className={styles.rightCapacityAndHost}>
          <img src={pic} alt='' />
        </div>
      </div>
    </div>
  );
};
