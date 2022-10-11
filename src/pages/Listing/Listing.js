import styles from './styles.module.css';
import { useParams } from 'react-router-dom';
import { SkeletonListingPage } from 'skeleton';
import {
  Gallery,
  ListingDetails,
  StayHeader,
  BookingForm,
  ReviewSection,
  Map,
  HostSection,
  ThingsToKnow,
  ExtendedFooter,
} from 'components';

export const Listing = ({ listingsData, usersData, reviewsData }) => {
  const { listing_id } = useParams();

  const pageLoaded =
    listingsData[listing_id] || Object.keys(usersData).length !== 0;

  if (!pageLoaded) return <SkeletonListingPage />;

  // Firebase backend
  const { placeName, city, state, country } = listingsData[listing_id].location;
  let center = listingsData[listing_id].location.center;

  const { rating, reviewCount } = listingsData[listing_id].feedbackScore;
  const images = listingsData[listing_id].images;
  const { USDperNight, cleaningFee, serviceFee } =
    listingsData[listing_id].cost;

  return (
    <div className={styles.container}>
      {!pageLoaded && <div>Loading...</div>}

      {pageLoaded && (
        <>
          <StayHeader
            placeName={placeName}
            rating={rating}
            reviewCount={reviewCount}
            city={city}
            state={state}
            country={country}
          />
          <div>
            <Gallery images={images} />
          </div>
          <div className={styles.mainGrid}>
            <div className={styles.listingDetails}>
              <ListingDetails
                listing_id={listing_id}
                listingsData={listingsData}
              />
            </div>
            <div className={[styles.bookingFormContainer].join(' ')}>
              <div className={[styles.stickyCalendar].join(' ')}>
                <BookingForm
                  USDperNight={USDperNight}
                  cleaningFee={cleaningFee}
                  serviceFee={serviceFee}
                  rating={rating}
                  reviewCount={reviewCount}
                />
                <div className={styles.reportButton}>
                  <div className='material-icons'>flag</div>
                  <div>Report this listing</div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.reviewsSection}>
            {!pageLoaded && (
              <ReviewSection
                rating={rating}
                reviewCount={reviewCount}
                specificReviews={listingsData[listing_id].reviews}
                reviewsData={reviewsData}
                usersData={usersData}
              />
            )}
          </div>
          <hr />
          <div className={styles.mapArea}>
            <Map center={center} city={city} state={state} country={country} />
          </div>
          <hr />
          <div className={styles.hostSection}>
            <HostSection
              usersData={usersData}
              userHost={listingsData[listing_id].host}
            />
          </div>
          <hr />
          <div className={styles.thingsToKnowContainer}>
            <ThingsToKnow rules={listingsData[listing_id].thingsToKnow} />
          </div>
          <hr />
          <div className={styles.extendedFooter}>
            <ExtendedFooter />
          </div>
        </>
      )}
    </div>
  );
};
