import React from 'react';
import styles from './styles.module.css';

export const ProfilePicture = ({ id, img }) => {
  return (
    <a href={`/users/show/${id}`}>
      <img src={img} alt='' />
    </a>
  );
};
