import React from 'react';
import styles from './styles.module.css';
import { SideScrollWidget } from 'components';
import { nanoid } from 'nanoid';

export const SleepArrangementSlides = ({ sleepArrangement }) => {
  const show = (sleepArrangement) => {
    let list = [];
    for (let key in sleepArrangement) {
      let obj = sleepArrangement[key];
      let room = key;
      let bedCount = obj[Object.keys(obj)];
      let bedType = Object.keys(sleepArrangement[key]);
      list.push(
        <div key={nanoid()} data-set-slide className={styles.slide}>
          <div className='material-symbols-outlined'>king_bed</div>
          <div>Bedroom{room}</div>
          <div>
            {bedCount} {bedType} bed
          </div>
        </div>
      );
    }
    return list;
  };

  const clickNext = (e) => {
    const slidesContainer = document.querySelector(
      `[data-set-slides-container]`
    );
    const slide = document.querySelector('[data-set-slide]');
    slidesContainer.scrollLeft += slide.clientWidth * 2;
    console.log(slide.clientWidth);
  };

  const clickPrev = (e) => {
    const slidesContainer = document.querySelector(
      `[data-set-slides-container]`
    );
    const slide = document.querySelector('[data-set-slide]');
    slidesContainer.scrollLeft -= slide.clientWidth * 2;
  };
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>Where you'll sleep</div>
      <div className={styles.sliderWrapper}>
        <div data-set-slides-container className={styles.slidesContainer}>
          {show(sleepArrangement)}
        </div>
        <button className={styles.slideArrowNext}>
          <span onClick={clickNext} className='material-symbols-outlined'>
            arrow_forward_ios
          </span>
        </button>
        <button className={styles.slideArrowPrev}>
          <span onClick={clickPrev} className='material-symbols-outlined'>
            arrow_back_ios
          </span>
        </button>
      </div>
    </div>
  );
};
