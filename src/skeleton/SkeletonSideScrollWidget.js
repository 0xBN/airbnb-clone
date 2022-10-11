import React from 'react';
import styles from './styles.module.css';
import { SkeletonElement } from 'skeleton';

export const SkeletonSideScrollWidget = ({ count }) => {
  const generateSkeleton = (clones) => {
    let list = [];
    for (let i = 0; i <= clones; i++) {
      list.push(
        <div key={i} className={styles.iconTextVertical}>
          <SkeletonElement type='icon' />
          <SkeletonElement type='text' />
        </div>
      );
    }

    return list;
  };

  return (
    <div className={styles.sideScrollWidgetContainer}>
      {generateSkeleton(count)}
    </div>
  );
};
