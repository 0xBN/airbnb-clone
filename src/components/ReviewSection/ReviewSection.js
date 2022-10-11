import React from 'react';
import styles from './styles.module.css';
import { nanoid } from 'nanoid';
import { ProfilePicture } from 'components';

export const ReviewSection = ({
  rating,
  reviewCount,
  reviews,
  reviewsData,
  specificReviews,
  usersData,
}) => {
  const filter = (reviews) => {
    const list = [];
    for (let review of specificReviews) {
      const { user, reviewComment, month, year } = reviewsData[review];
      let img = usersData[user].user.profilePicture;
      let username = usersData[user].user.userName;

      list.push(
        <div key={nanoid()} className={styles.reviewItem}>
          <div className={styles.pictureNameDate}>
            <div className={styles.userPic}>
              <ProfilePicture id={user} img={img} />
            </div>

            <div className={styles.usernameAndDate}>
              <div className={styles.username}>{username}</div>
              <div className={styles.reviewDate}>
                {month} {year}
              </div>
            </div>
          </div>
          <div>{reviewComment}</div>
        </div>
      );
    }
    return list;
  };

  return (
    <div className={styles.container}>
      <div className={styles.reviewHeader}>
        <div className='material-icons'>star</div>
        <div>{rating}</div>
        <div>·</div>
        <div>
          {reviewCount} review{reviewCount === 1 ? null : 's'}
        </div>
      </div>
      <div className={styles.reviewScores}>
        <div className={styles.reviewLine}>
          <div>Cleanliness</div>
          <div>5.0</div>
        </div>
        <div className={styles.reviewLine}>
          <div>Communication</div>
          <div>5.0</div>
        </div>
        <div className={styles.reviewLine}>
          <div>Check-in</div>
          <div>5.0</div>
        </div>
        <div className={styles.reviewLine}>
          <div>Accuracy</div>
          <div>5.0</div>
        </div>
        <div className={styles.reviewLine}>
          <div>Location</div>
          <div>5.0</div>
        </div>
        <div className={styles.reviewLine}>
          <div>Value</div>
          <div>5.0</div>
        </div>
      </div>
      <div className={styles.reviewContainer}>{filter(reviews)}</div>
    </div>
  );
};
