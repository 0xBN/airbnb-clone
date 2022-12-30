import React from 'react';
import styles from './styles.module.css';
import { nanoid } from 'nanoid';
// import { listings } from '../../exampleData';

export const PropertyCard = ({ images, id, listingsData }) => {
  const [favorite, setFavorite] = React.useState(false);

  // Local database: Remove this eventually
  // const { city, state, closestPark } = listings[id].location;
  // const { USDperNight } = listings[id].cost;
  // const { rating } = listings[id].feedbackScore;

  // Converted for FireBase: final database
  if (!listingsData[id]) return;
  const { city, state, closestPark } = listingsData[id].location;
  const { USDperNight } = listingsData[id].cost;
  const { rating } = listingsData[id].feedbackScore;
  // console.log(city);

  const show = (images) => {
    const imageList = [];
    for (let image of images) {
      imageList.push(
        <li key={nanoid()} data-set-slide className={styles.slide}>
          <a href={`./listing/${id}`}>
            <img src={image} alt='' />
          </a>
        </li>
      );
    }

    return imageList;
  };

  const clickNext = (e) => {
    const slidesContainer = document.querySelector(
      `[data-set-slides-container=${id}]`
    );
    const slide = document.querySelector('[data-set-slide]');
    slidesContainer.scrollLeft += slide.clientWidth;
  };

  const clickPrev = (e) => {
    const slidesContainer = document.querySelector(
      `[data-set-slides-container=${id}]`
    );
    const slide = document.querySelector('[data-set-slide]');
    slidesContainer.scrollLeft -= slide.clientWidth;
  };

  const clickFavorite = (e) => {
    setFavorite((prevState) => !prevState);
    console.log('Add this listing to user favorite list');
  };

  return (
    <div className={styles.container}>
      <div className={styles.sliderWrapper}>
        <ul data-set-slides-container={id} className={styles.slidesContainer}>
          {show(images)}
        </ul>
        <button
          className={styles.slideArrowNext}
          id='slide-arrow-next'
          data-set-button={id}
          onClick={clickNext}
        >
          <span className='material-symbols-outlined'>chevron_right</span>
        </button>
        <button
          className={styles.slideArrowPrev}
          id='slide-arrow-prev'
          data-set-button={id}
          onClick={clickPrev}
        >
          <span className='material-symbols-outlined'>chevron_left</span>
        </button>
        <button className={styles.favorite} onClick={clickFavorite}>
          <span
            className={`${styles.star} material-icons ${
              favorite ? styles.favorited : 'null'
            }`}
          >
            {!favorite ? 'favorite_border' : 'favorite'}
          </span>
        </button>
      </div>
      <div>
        <div className={styles.firstRow}>
          <div className={styles.location}>
            {city}, {state}
          </div>
          <div className={styles.rating}>
            <span className='material-icons'>star</span>
            {rating}
          </div>
        </div>
        <div className={styles.locationDetails}>{closestPark}</div>
        <div className={styles.locationDetails}>Oct 8-13</div>
        <div className={styles.stayRate}>
          <span className={styles.nightCost}>${USDperNight}</span> night
        </div>
      </div>
    </div>
  );
};
