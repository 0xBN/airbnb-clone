import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

export const BookingForm = ({
  USDperNight,
  cleaningFee,
  serviceFee,
  rating,
  reviewCount,
  startDate,
  endDate,

  currentListing,
}) => {
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate(`/checkout`);
    console.log(currentListing);
  };
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const scrollIntoView = () => {
    document
      .getElementById('calendar-container')
      .scrollIntoView({ behavior: 'smooth' });
  };

  const convertDateFormat = (date) => {
    // console.log(date);
    const [year, month, day] = date.split('-');
    // console.log(months[month], day, year);
    return `${months[month]} ${day}, ${year}`;
  };

  const hasChosenDates = startDate && endDate;

  return (
    <div onClick={scrollIntoView} className={styles.container}>
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
          <div>{startDate ? convertDateFormat(startDate) : 'Add date'}</div>
        </div>
        <div className={styles.checkOut}>
          <div>CHECKOUT</div>
          <div>{endDate ? convertDateFormat(endDate) : 'Add date'}</div>
        </div>
        <div className={styles.guests}>
          <div className={`${styles.specificGuests}`}>
            <div>GUESTS</div>
            <div>1 guest</div>
          </div>
          <div>
            <span className='material-icons'>expand_more</span>
          </div>
        </div>
      </div>
      <div className={styles.availableButtonArea}>
        {!hasChosenDates && (
          <button className={styles.checkAvailabilityButton}>
            Check availability
          </button>
        )}
        {hasChosenDates && (
          <button
            onClick={navigateToCheckout}
            className={styles.checkAvailabilityButton}
          >
            Book reservation
          </button>
        )}
      </div>
    </div>
  );
};
