import React from 'react';
import styles from './styles.module.css';
import { SkeletonElement } from 'skeleton';

export const SkeletonUserPage = () => {
  return (
    <div className={styles.userProfilePage}>
      <div className={styles.leftProfile}>
        <div className={styles.profilePicture}>
          <SkeletonElement type='avatar' />
          <SkeletonElement type='text' />
          <SkeletonElement type='text' />
          <SkeletonElement type='text' />
        </div>
        <hr />
        <div className={styles.profilePictureBottom}>
          <SkeletonElement type='title' />
          <SkeletonElement type='text' />
          <SkeletonElement type='text' />
          <SkeletonElement type='text' />
        </div>
      </div>
      <div className={styles.rightProfile}>
        <SkeletonElement type='title' />
        <SkeletonElement type='text' />
        <br />
        <SkeletonElement type='title' />
        <SkeletonElement type='text' />
        <SkeletonElement type='text' />
        <hr />
        <SkeletonElement type='title' />
        <div className={styles.profileListings}>
          <div className={styles.specificListing}>
            <SkeletonElement type='picture' />
            <SkeletonElement type='title' />
            <SkeletonElement type='text' />
            <SkeletonElement type='text' />
          </div>
          <div className={styles.specificListing}>
            <SkeletonElement type='picture' />
            <SkeletonElement type='title' />
            <SkeletonElement type='text' />
            <SkeletonElement type='text' />
          </div>
          <div className={styles.specificListing}>
            <SkeletonElement type='picture' />
            <SkeletonElement type='title' />
            <SkeletonElement type='text' />
            <SkeletonElement type='text' />
          </div>
        </div>
      </div>
    </div>
  );
};
