import React from 'react';
// import { useParams } from 'react-router-dom';
import styles from './styles.module.css';

export const Checkout = ({
  currentUser,
  listingsData,
  startDate,
  endDate,
  currentListing,
}) => {
  const { displayName, email } = currentUser;

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

  console.log(endDate - startDate);

  // return;

  const convertDate = (start, end) => {
    const [startYear, startMonth, startDay] = start.split('-');
    const [endYear, endMonth, endDay] = end.split('-');
    return `${months[startMonth]} ${startDay}, ${startYear} to ${months[endMonth]} ${endDay}, ${endYear}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.checkoutLeft}>
        <h3>Confirm reservation</h3>
        <br />
        <br />
        <br />
        <div className={styles.yourTrip}>
          <div>Your Trip</div>
          <div>
            <div>Guest</div>
            <div>{displayName}</div>
            <div>{email}</div>
          </div>
          <div>
            <div>Dates</div>
            <div>{convertDate(startDate, endDate)}</div>
          </div>
        </div>
        <hr />
        <div className={styles.travelInsurance}>
          <div>Travel Insurance</div>
          <div>Travel insurance is automatically covered!</div>
        </div>
        <hr />
        <div className={styles.paySection}>
          <div>Pay with</div>
          <div>All major credit card carriers, paid onsite.</div>
        </div>
        <hr />
        <div className={styles.cancellation}>
          <div>Cancellation</div>
          <div>Free cancellation 5 days before trip (120 hours)</div>
        </div>
        <hr />
        <div className={styles.terms}>
          <div>By selecting the button below, I agree to the rules.</div>
          <button>Confirm reservation</button>
        </div>
      </div>
      <></>
      <div className={styles.checkoutRight}>
        <div className={styles.checkoutTotal}>
          <div className={styles.propertyDetailsLeft}>
            <div className={styles.checkoutImage}>
              <img src={listingsData[currentListing].images[0]} alt='' />
            </div>
            <div className={styles.propertyDetailsRight}>
              <div>
                <div>
                  Entire {listingsData[currentListing].location.stayType}
                </div>
                <div>{listingsData[currentListing].location.placeName}</div>
              </div>
              <div>
                <div className={styles.reviewLine}>
                  <span className='material-icons'>star</span>
                  {listingsData[currentListing].feedbackScore.rating} (
                  {listingsData[currentListing].feedbackScore.reviewCount})
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.airCoverSection}>
            Your book is protected by{' '}
            <span>
              {' '}
              <div className={`${styles.airCoverLogo} sectionTitle`}>
                <div>air</div>
                <div>cover</div>
              </div>
            </span>
          </div>
          <hr />
          <div>
            <div>Price details</div>
            <div>$$$ x Nights</div>
          </div>
        </div>
      </div>
    </div>
  );
};
