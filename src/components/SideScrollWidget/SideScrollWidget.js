import React from 'react';
import styles from './styles.module.css';

export const SideScrollWidget = ({ data }) => {
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
        <a href={`#${name}`} key={name}>
          <span className='material-symbols-outlined'>{icon}</span>
          {name}
        </a>
      );
    }

    return iconsList;
  };

  return (
    <div className={styles.container}>
      <button type='button' id='leftBtn' onClick={scroll}>
        <span className='material-symbols-outlined'>arrow_circle_left</span>
      </button>
      <div id='scrollArea' className={styles.scroller}>
        {show(data)}
      </div>
      <button type='button' id='rightBtn' onClick={scroll}>
        <span className='material-symbols-outlined'>arrow_circle_right</span>
      </button>
      <button type='filter'>
        <span className='material-symbols-outlined'>tune</span>Filters
      </button>
    </div>
  );
};
