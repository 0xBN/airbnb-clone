import React from 'react';
import styles from './styles.module.css';
import { SkeletonElement, SkeletonSideScrollWidget } from 'skeleton';

export const SideScrollWidget = ({ data, scrollBar }) => {
  const scroll = (e) => {
    const scroll_div = document.getElementById('scrollArea');
    e.target.textContent === 'arrow_circle_left'
      ? scroll_div.scrollBy({
          left: -scroll_div.clientWidth,
          top: 0,
          behavior: 'smooth',
        })
      : scroll_div.scrollBy({
          left: +scroll_div.clientWidth,
          top: 0,
          behavior: 'smooth',
        });
  };

  const show = (list) => {
    const iconsList = [];
    for (let key in list) {
      const { name, icon } = list[key];

      iconsList.push(
        <a href={`#${name}`} key={name} className={styles.icons}>
          <span className='material-symbols-outlined'>{icon}</span>
          {name}
        </a>
      );
    }

    return iconsList;
  };

  const isLoaded = data.length !== 0;
  const loadSideScroll = true;

  return (
    <div className={styles.container}>
      {/* <SkeletonSideScrollWidget count={12} /> */}
      {!isLoaded && <SkeletonSideScrollWidget count={12} />}
      {isLoaded && (
        <>
          <button type='button' id='leftBtn' onClick={scroll}>
            <span className='material-symbols-outlined'>arrow_circle_left</span>
          </button>
          <div id='scrollArea' className={styles.scroller}>
            {show(data)}
          </div>
          <button type='button' id='rightBtn' onClick={scroll}>
            <span className='material-symbols-outlined'>
              arrow_circle_right
            </span>
          </button>
          <button type='filter'>
            <span className='material-symbols-outlined'>tune</span>Filters
          </button>
        </>
      )}
    </div>
  );
};
