import React from 'react';
import styles from './styles.module.css';

export const StayHeader = ({
  placeName,
  rating,
  reviewCount,
  city,
  state,
  country,
}) => {
  return (
    <div>
      <h1>{placeName}</h1>
      <div className={styles.placeDetails}>
        <div className={styles.placeDetailsLeft}>
          <div className={styles.rating}>
            <span className={`${styles.star} material-icons`}>star</span>
            {rating}
          </div>
          <div>·</div>
          <div>{reviewCount} reviews</div>
          <div>·</div>
          <div>
            {city}, {state}, {country}
          </div>
        </div>
        <div className={styles.placeDetailsRight}>
          <button>
            <span className='material-icons'>ios_share</span>Share
          </button>
          <button>
            <span className='material-icons'>favorite_border</span>Save
          </button>
        </div>
      </div>
    </div>
  );
};
