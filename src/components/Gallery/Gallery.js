import styles from './styles.module.css';
import React from 'react';

export const Gallery = ({ images }) => {
  const show = (images) => {
    const imageList = [];
    for (let i = 0; i < 5; i++) {
      imageList.push(
        <div key={i} className={styles.picture}>
          <img src={images[i]} alt='' />
        </div>
      );
    }
    return imageList;
  };
  return (
    <div className={styles.container}>
      <div className={styles.galleryContainer}>{show(images)}</div>
      <button className={styles.showAllBtn}>
        <span className='material-symbols-outlined'>apps</span>Show all photos
      </button>
    </div>
  );
};
