import styles from './styles.module.css';
import { listings } from '../../exampleData';
import { useParams } from 'react-router-dom';
import {
  Gallery,
  ListingDetails,
  StayHeader,
  BookingForm,
  ReviewSection,
  Map,
} from 'components';

export const Listing = () => {
  const { listing_id } = useParams();

  const { placeName, city, state, country, stayType } =
    listings[listing_id].location;
  const { rating, reviewCount } = listings[listing_id].feedbackScore;
  const images = listings[listing_id].images;

  const { USDperNight, cleaningFee, serviceFee } = listings[listing_id].cost;

  return (
    <div className={styles.container}>
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
          <ListingDetails listing_id={listing_id} />
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
        <ReviewSection
          rating={rating}
          reviewCount={reviewCount}
          reviews={listings[listing_id].reviews}
        />
      </div>
      <div className={styles.mapArea}>
        <Map />
        <div className={styles.temporarySquare}>Google Map Object</div>
        <div className={styles.temporarySquare}>Location</div>
        <div className={styles.temporarySquare}>Location Details</div>
      </div>
      <div className={styles.hostSection}>
        <div className={[styles.hostBadge, styles.temporarySquare].join(' ')}>
          Host Badge
        </div>
        <div className={[styles.hostDetails, styles.temporarySquare].join(' ')}>
          <div className={styles.temporarySquare}>Host details left</div>
          <div className={styles.temporarySquare}>host details right</div>
        </div>
      </div>
      <div className={styles.thingsToKnowContainer}>
        <div className={styles.temporarySquare}>House rules</div>
        <div className={styles.temporarySquare}>Health & safety</div>
        <div className={styles.temporarySquare}>Cancellation policy</div>
      </div>
      <div className={styles.extendedFooter}>
        <div className={styles.temporarySquare}>Support</div>
        <div className={styles.temporarySquare}>Community</div>
        <div className={styles.temporarySquare}>Hosting</div>
        <div className={styles.temporarySquare}>Airbnb</div>
      </div>
      <></>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
