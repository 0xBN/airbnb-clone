import React from 'react';
import styles from './styles.module.css';
import { listings } from '../../exampleData';
import {
  FeatureIcon,
  SleepArrangementSlides,
  StayOverview,
  AirCover,
  AmenitiesSection,
  CalendarPicker,
  CalendarPicker2,
} from 'components';
import { nanoid } from 'nanoid';

export const ListingDetails = ({ listing_id }) => {
  const { placeName, city, state, country, stayType, aboutLocation } =
    listings[listing_id].location;
  const { rating, reviews } = listings[listing_id].feedbackScore;
  const images = listings[listing_id].images;
  const { hostName, pic } = listings[listing_id].host;
  const { guestCapacity, bedroomCount, bedCount, bathCount } =
    listings[listing_id].capacity;

  const { USDperNight, cleaningFee, serviceFee, minNights } =
    listings[listing_id].cost;

  const show = (list) => {
    const elementList = [];
    for (let key in list) {
      const { name, icon } = list[key];
      elementList.push(<FeatureIcon icon={icon} title={name} key={nanoid()} />);
    }
    return elementList;
  };
  return (
    <div className={styles.container}>
      <StayOverview
        stayType={stayType}
        hostName={hostName}
        guestCapacity={guestCapacity}
        bedroomCount={bedroomCount}
        bedCount={bedCount}
        bathCount={bathCount}
        pic={pic}
      />

      <hr />
      <div className={styles.detailsSection1}>
        <FeatureIcon
          icon='door_open'
          title='Self check-in'
          details='Check yourself in with the lockbox.'
        />
        <FeatureIcon
          icon='military_tech'
          title={`${hostName} is a Superhost`}
          details='Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
          '
        />
        <FeatureIcon
          icon='location_on'
          title='Great location'
          details='90% of recent guests gave the location a 5-star rating.
          '
        />
        <hr />
        <AirCover />
        <hr />
        <div>{aboutLocation}</div>
        <hr />
        <div>
          <SleepArrangementSlides
            sleepArrangement={listings[listing_id].sleepArrangements}
          />
        </div>
        <hr />
        <AmenitiesSection amenities={listings[listing_id].amenities} />
        <hr />
        <CalendarPicker city={city} minNights={minNights} />
      </div>
    </div>
  );
};
