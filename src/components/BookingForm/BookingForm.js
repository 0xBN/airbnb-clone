import React from 'react';
import styles from './styles.module.css';

export const BookingForm = ({
  USDperNight,
  cleaningFee,
  serviceFee,
  rating,
  reviewCount,
}) => {
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.test}>BookingForm</h1> */}
      <div className={styles.checkAvailabilityHeader}>
        <div className={styles.headerLeft}>
          <div>${USDperNight}</div>
          <div>night</div>
        </div>
        <div className={styles.headerRight}>
          <div className='material-icons'>star</div>
          <div>{rating}</div>
          <div> · </div>
          <div>{reviewCount} reviews</div>
        </div>
      </div>
      <div className={styles.guestDetails}>
        <div className={styles.checkIn}>
          <div>CHECK-IN</div>
          <div>Add date</div>
        </div>
        <div className={styles.checkOut}>
          <div>CHECKOUT</div>
          <div>Add date</div>
        </div>
        <div className={styles.guests}>
          <div className={`${styles.specificGuests}`}>
            {/* <div>
            </div> */}
            <div>GUESTS</div>
            <div>1 guest</div>
          </div>
          <div>
            <span className='material-icons'>expand_more</span>
          </div>
        </div>
      </div>
      <div className={styles.availableButtonArea}>
        <button className={styles.checkAvailabilityButton}>
          Check availability
        </button>
      </div>
    </div>
  );
};
