import React from 'react';
import styles from './styles.module.css';
import { listings as listings2, users } from '../../exampleData';
import {
  FeatureIcon,
  SleepArrangementSlides,
  StayOverview,
  AirCover,
  AmenitiesSection,
  CalendarPicker,
} from 'components';
import { nanoid } from 'nanoid';

export const ListingDetails = ({
  setStartDate,
  setEndDate,
  listing_id,
  listingsData,
}) => {
  // return;
  const { placeName, city, state, country, stayType, aboutLocation } =
    listingsData[listing_id].location;
  const { rating, reviews } = listingsData[listing_id].feedbackScore;
  const images = listingsData[listing_id].images;
  const { userID, pic } = listingsData[listing_id].host;
  const { guestCapacity, bedroomCount, bedCount, bathCount } =
    listingsData[listing_id].capacity;

  const { userName, profilePicture } = users[userID].user;

  const { USDperNight, cleaningFee, serviceFee, minNights, setCurrentListing } =
    listingsData[listing_id].cost;

  return (
    <div className={styles.container}>
      <StayOverview
        stayType={stayType}
        userName={userName}
        userID={userID}
        guestCapacity={guestCapacity}
        bedroomCount={bedroomCount}
        bedCount={bedCount}
        bathCount={bathCount}
        profilePicture={profilePicture}
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
          title={`${userName} is a Superhost`}
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
            sleepArrangement={listingsData[listing_id].sleepArrangements}
          />
        </div>
        <hr />
        <AmenitiesSection amenities={listingsData[listing_id].amenities} />
        <hr />
        <CalendarPicker
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          city={city}
          minNights={minNights}
          setCurrentListing={setCurrentListing}
          currentListingId={listing_id}
        />
      </div>
    </div>
  );
};
