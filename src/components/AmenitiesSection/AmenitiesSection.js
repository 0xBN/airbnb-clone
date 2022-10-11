import React from 'react';
import styles from './styles.module.css';
import { nanoid } from 'nanoid';
import { FeatureIcon } from 'components';

export const AmenitiesSection = ({ amenities }) => {
  const show = (list) => {
    const elementList = [];
    for (let key in list) {
      const { name, icon } = list[key];
      elementList.push(<FeatureIcon icon={icon} title={name} key={nanoid()} />);
    }
    return elementList;
  };
  return (
    <div className={styles.amenitiesSection}>
      <div className='sectionTitle'>What this place offers</div>
      <div className={styles.amenities}>{show(amenities)}</div>
      <button className={styles.amenitiesButton}>Show all 48 amenities</button>
    </div>
  );
};
