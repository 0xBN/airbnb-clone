import React from 'react';
import styles from './styles.module.css';
import { SkeletonElement } from 'skeleton';

export const SkeletonHome = ({ count }) => {
  const generateSkeleton = () => {
    let list = [];
    for (let i = 0; i < count; i++) {
      list.push(
        <div key={i} className={styles.propertyCardContainer}>
          <SkeletonElement type='picture' />
          <div className={styles.pictureText}>
            <div className={styles.leftPicture}>
              <SkeletonElement type='title' />
              <SkeletonElement type='text' />
              <SkeletonElement type='text' />
            </div>
            <div className={styles.rightPicture}>
              <SkeletonElement type='text' />
            </div>
          </div>
        </div>
      );
    }
    return list;
  };
  return <div className={styles.homeContainer}>{generateSkeleton(count)}</div>;
};
