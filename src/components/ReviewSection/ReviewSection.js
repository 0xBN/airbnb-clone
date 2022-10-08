import React from 'react';
import styles from './styles.module.css';
import { users } from '../../exampleData';
import { nanoid } from 'nanoid';

export const ReviewSection = ({ rating, reviewCount, reviews }) => {
  const getUser = (userId) => {
    const { profilePicture, userName } = users[userId].user;

    return [userName, profilePicture];
  };

  const show = (reviews) => {
    const list = [];
    for (let key in reviews) {
      const { customer, review, reviewMonth, reviewYear } = reviews[key];
      let img = getUser(customer)[1];
      let username = getUser(customer)[0];
      list.push(
        <div key={nanoid()} className={styles.reviewItem}>
          <div className={styles.pictureNameDate}>
            <div className={styles.userPic}>
              <img src={img} alt='' />
            </div>
            <div className={styles.usernameAndDate}>
              <div className={styles.username}>{username}</div>
              <div className={styles.reviewDate}>
                {reviewMonth} {reviewYear}
              </div>
            </div>
          </div>
          <div>{review}</div>
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
      <div className={styles.reviewContainer}>{show(reviews)}</div>
    </div>
  );
};
