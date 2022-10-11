import React from 'react';
import styles from './styles.module.css';
import { ProfilePicture } from 'components';

export const StayOverview = ({
  stayType,
  userName,
  guestCapacity,
  bedroomCount,
  bedCount,
  bathCount,
  profilePicture,
  userID,
}) => {
  return (
    <div>
      <div className={styles.capacityAndHost}>
        <div className={styles.leftCapacityAndHost}>
          <div className={styles.sectionTitle}>
            Entire {stayType} hosted by {userName}
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
          <ProfilePicture id={userID} img={profilePicture} />
        </div>
      </div>
    </div>
  );
};
