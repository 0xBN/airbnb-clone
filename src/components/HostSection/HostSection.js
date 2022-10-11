import React from 'react';
import styles from './styles.module.css';

import { ProfilePicture } from 'components';

export const HostSection = ({ usersData, userHost, user }) => {
  const isPageLoaded = Object.keys(usersData).length !== 0;
  if (!isPageLoaded) return;

  const {
    userId,
    userName,
    joinYear,
    joinMonth,
    bio,
    language,
    stayAvailability,
    responseRate,
    reponseTime,
    profilePicture,
  } = usersData[userHost.userID].user;

  const { received } = usersData[userHost.userID].reviews;

  return (
    <div>
      <div className={styles.hostHeader}>
        <div className={styles.hostHeaderLeft}>
          <ProfilePicture id={userId} img={profilePicture} />
        </div>
        <div className={styles.hostHeaderRight}>
          <div>Hosted by {userName}</div>
          <div>
            Joined in {joinMonth} {joinYear}
          </div>
        </div>
      </div>

      <div className={styles.hostDetails}>
        <div className={styles.leftColumn}>
          <div className={styles.reviewsAndIdentity}>
            <div>
              <span className='material-icons'>star</span> {received.length}{' '}
              Reviews
            </div>
            <div>
              <span className='material-icons'>verified_user</span>
              Identity verified
            </div>
          </div>
          <div>{bio}</div>
          <div>
            <div className={styles.subTitle}>During your stay</div>
            <div>
              Host is available via{' '}
              {stayAvailability.length === 1
                ? stayAvailability
                : `${stayAvailability[0]} or ${stayAvailability[1]}`}
              .
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div>
            <div>
              Language{language.length === 1 ? null : 's'}:{' '}
              {language.map(
                (item) => item[0].toUpperCase() + item.slice(1) + ' '
              )}
            </div>
            <div>Response rate: {responseRate}% </div>
            <div>
              Response time:{' '}
              {reponseTime <= 1 ? 'within an hour' : 'within a day'}
            </div>
          </div>
          <button>Contact Host</button>
          <div className={styles.protectPayment}>
            <div className='material-icons'>account_balance_wallet</div>
            <div>
              To protect your payment, never transfer money or communicate
              outside of the Airbnb website or app.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
