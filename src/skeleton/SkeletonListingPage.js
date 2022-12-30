import React from 'react';
import styles from './styles.module.css';
import { SkeletonElement } from 'skeleton';

export const SkeletonListingPage = () => {
  const generateGallery = () => {
    const list = [];
    for (let i = 0; i < 5; i++) {
      list.push(
        <div key={i} className={styles.singlePicture}>
          <SkeletonElement type='galleryPicture' />
        </div>
      );
    }

    return list;
  };
  return (
    <div className={styles.listingPageContainer}>
      <div className={styles.listingPageTitle}>
        <SkeletonElement type='title' />
        <SkeletonElement type='text' />
      </div>
      <div className={styles.galleryContainer}>{generateGallery()}</div>
      <div className={styles.listingDetails}>
        <div>
          <SkeletonElement type='title' />
          <SkeletonElement type='text' />
        </div>
        <div>
          <SkeletonElement type='avatar' />
        </div>
        <div>
          <SkeletonElement type='title' />
          <SkeletonElement type='text' />
        </div>
      </div>
    </div>
  );
};
