import React from 'react';
import styles from './styles.module.css';
import { Pulse } from 'skeleton';

export const SkeletonElement = ({ type, theme }) => {
  let skeletons = {
    title: styles.title,
    text: styles.text,
    shortText: styles.shortText,
    icon: styles.icon,
    avatar: styles.avatar,
    picture: styles.picture,
    galleryPicture: styles.galleryPicture,
  };

  let elementType = skeletons[type] || styles.title;

  return (
    <div className={styles.skeletonWrapper}>
      <div className={elementType}></div>
      {/* <Shimmer /> */}
      <Pulse />
    </div>
  );
};
