import React from 'react';
import styles from './styles.module.css';
import { FeatureIcon } from 'components';

export const ThingsToKnow = ({ rules }) => {
  const { checkin, checkout, selfCheckin, smokingAllowed, petsAllowed } =
    rules.rules;

  // const { covid, pool, carbonMonoxide, smokeAlarm } = rules.healthSafety;

  // const { allowedCancellation, daysNoticeRequired } = rules.cancellation;

  return (
    <div className={styles.container}>
      <div className='sectionTitle'>Things to know</div>
      <div className={styles.columnsContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.columnTitle}>House rules</div>
          <FeatureIcon
            icon='schedule'
            iconSmall
            title={`Check-in After ${checkin}`}
          />
          <FeatureIcon
            icon='schedule'
            iconSmall
            title={`Checkout: ${checkout}`}
          />
          {selfCheckin && (
            <FeatureIcon
              icon='meeting_room'
              iconSmall
              title='Self check-in with keypad'
            />
          )}
          {petsAllowed ? (
            <FeatureIcon icon='pets' iconSmall title='Pets allowed' />
          ) : (
            <FeatureIcon icon='block' iconSmall title='No pets' />
          )}
          {smokingAllowed ? (
            <FeatureIcon
              icon='smoking_rooms'
              iconSmall
              title='Smoking is allowed'
            />
          ) : (
            <FeatureIcon
              icon='smoke_free'
              iconSmall
              title='Smoking not allowed'
            />
          )}
          <br />
          <div>{`Show more >`}</div>
        </div>
        <div className={styles.middleColumn}>
          <div className={styles.columnTitle}>Health & safety</div>
          <FeatureIcon
            icon='clean_hands'
            iconSmall
            title={`Airbnb's COVID-19 safety practices apply`}
          />
          <FeatureIcon
            icon='error'
            iconSmall
            title={`Pool/hot tub without a gate or lock`}
          />
          <FeatureIcon
            icon='detector_co'
            iconSmall
            title={`Carbon monoxide alarm`}
          />
          <FeatureIcon icon='detector_smoke' iconSmall title={`Smoke alarm`} />
          <br />
          <div>{`Show more >`}</div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.columnTitle}>Cancellation policy</div>
          <div>
            Add your trip dates to get the cancellation details for this stay.
          </div>
          <br />
          <div>{`Add dates >`}</div>
        </div>
      </div>
    </div>
  );
};
