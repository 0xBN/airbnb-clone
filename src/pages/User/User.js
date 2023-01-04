import React from 'react';
import styles from './styles.module.css';
import { useParams } from 'react-router-dom';
// import { users as users2 } from '../../exampleData';
import { FeatureIcon, ExtendedFooter } from 'components';
import { nanoid } from 'nanoid';
import { SkeletonUserPage } from 'skeleton';

export const User = ({ listingsData, users }) => {
  const { user_id } = useParams();
  const isLoaded = Object.keys(listingsData).length !== 0;

  if (!users[user_id] || !isLoaded) {
    return <SkeletonUserPage />;
  }

  const {
    userName,
    joinYear,
    bio,
    city,
    state,
    language,
    work,
    profilePicture,
  } = users[user_id].user;

  const { given, received } = users[user_id].reviews;
  let totalReviews = given.length + received.length;

  const { listings } = users[user_id];

  const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

  const processList = (list, string = '') => {
    list.forEach((item) => (string += capitalize(item) + ' '));
    return string;
  };

  const show = (listings) => {
    let list = [];
    listings.forEach((listingId) => {
      const picture = listingsData[listingId].images[0];

      const { rating, reviewCount } = listingsData[listingId].feedbackScore;

      const { stayType, placeName } = listingsData[listingId].location;

      list.push(
        <div key={nanoid()} className={styles.listings}>
          <a href={`/listing/${listingId}`}>
            <img src={picture} alt='' />
            <div className={styles.ratings}>
              <div className='material-icons'>star</div>
              <div>{rating}</div>
              <div>({reviewCount})</div>
            </div>
            <div>Entire {stayType}</div>
            <div>{placeName}</div>
          </a>
        </div>
      );
    });
    return list;
  };

  processList(language);
  return (
    <div className={styles.container}>
      {/* <SkeletonUserPage /> */}
      <div className={styles.profileContainer}>
        <div className={styles.leftSide}>
          <div className={styles.leftSideBox}>
            <div className={styles.profilePicture}>
              <img src={profilePicture} alt='' />
            </div>
            <div className={styles.reviewsAndIdentity}>
              <div className={styles.totalReviews}>
                <span className='material-symbols-outlined'>star</span>
                {totalReviews} reviews
              </div>
              <div className={styles.identityVerified}>
                <span className='material-symbols-outlined'>verified_user</span>
                Identity verified
              </div>
            </div>

            <hr className={styles.shortHr} />
            <div className={styles.confirmedIdEmailPhone}>
              <div>{userName} confirmed</div>
              <FeatureIcon icon='done' title='Identity' iconSmall />
              <FeatureIcon icon='done' title='Email address' iconSmall />
              <FeatureIcon icon='done' title='Phone number' iconSmall />
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.greeter}>
            <div>Hi, I'm {userName}</div>
            <div>Joined in {joinYear} </div>
          </div>
          <div className={styles.about}>
            <div>About</div>
            <div>{bio}</div>
          </div>
          <div className={styles.hostDetails}>
            <FeatureIcon
              icon='house'
              title={`Lives in ${city}, ${state}`}
              iconSmall
            />
            <FeatureIcon
              icon='chat_bubble'
              title={`Speaks: ${processList(language)}`}
              iconSmall
            />
            <FeatureIcon
              icon='work'
              title={`Work: ${capitalize(work)}`}
              iconSmall
            />
          </div>
          <hr />
          <div>
            {userName}'s listing{listings.length === 1 ? null : 's'}
          </div>
          <div className={styles.listingContainer}>{show(listings)}</div>
        </div>
      </div>
      <hr />
      <ExtendedFooter />
    </div>
  );
};
