import React from 'react';
import styles from './styles.module.css';

export const CalendarPicker = ({ city, minNights }) => {
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const d = new Date();
  const currentMonth = d.getMonth();
  const currentYear = d.getFullYear();

  return (
    <div className={styles.container}>
      <h1 className={styles.test}>CalendarPicker</h1>
      <div className={styles.sectionTitle}>Select checkin-in date</div>
      <div className={styles.minNights}>Minimum stay: {minNights} nights</div>
      {/* <div className={styles.sectionTitle}>X nights in {city}</div> */}

      <div className={styles.doubleCalendarContainer}>
        <div className={styles.calendarContainer}>
          <div className={styles.currentMonth}>
            <div className='material-symbols-outlined'>arrow_back_ios</div>
            <div>
              {months[currentMonth]} {currentYear}
            </div>
            {/* <div className='material-symbols-outlined'>arrow_forward_ios</div> */}
          </div>

          <div className={styles.calendarGrid}>
            <div className={styles.dayOfWeek}>Su</div>
            <div className={styles.dayOfWeek}>Mo</div>
            <div className={styles.dayOfWeek}>Tu</div>
            <div className={styles.dayOfWeek}>We</div>
            <div className={styles.dayOfWeek}>Th</div>
            <div className={styles.dayOfWeek}>Fr</div>
            <div className={styles.dayOfWeek}>Sa</div>
            <button className={styles.day}>1</button>
            <button className={styles.day}>2</button>
            <button className={styles.day}>3</button>
            <button className={styles.day}>4</button>
            <button className={styles.day}>5</button>
            <button className={styles.day}>6</button>
            <button className={styles.day}>7</button>
            <button className={styles.day}>8</button>
            <button className={styles.day}>9</button>
            <button className={styles.day}>10</button>
            <button className={styles.day}>11</button>
            <button className={styles.day}>12</button>
            <button className={styles.day}>13</button>
            <button className={styles.day}>14</button>
            <button className={styles.day}>15</button>
            <button className={styles.day}>16</button>
            <button className={styles.day}>17</button>
            <button className={styles.day}>18</button>
            <button className={styles.day}>19</button>
            <button className={styles.day}>20</button>
            <button className={styles.day}>21</button>
            <button className={styles.day}>22</button>
            <button className={styles.day}>23</button>
            <button className={styles.day}>24</button>
            <button className={styles.day}>25</button>
            <button className={styles.day}>26</button>
            <button className={styles.day}>27</button>
            <button className={styles.day}>28</button>
            <button className={styles.day}>29</button>
            <button className={styles.day}>30</button>
            <button className={styles.day}>31</button>
            <button className={styles.day}>p</button>
            <button className={styles.day}>p</button>
            <button className={styles.day}>p</button>
            <button className={styles.day}>p</button>
          </div>
        </div>
        <div className={styles.calendarContainer}>
          <div className={styles.nextMonth}>
            {/* <div className='material-symbols-outlined'>arrow_back_ios</div> */}
            <div>
              {currentMonth === 11 ? months[0] : months[currentMonth + 1]}{' '}
              {currentMonth === 11 ? currentYear + 1 : currentYear}
            </div>
            <div className='material-symbols-outlined'>arrow_forward_ios</div>
          </div>

          <div className={styles.calendarGrid}>
            <div className={styles.dayOfWeek}>Su</div>
            <div className={styles.dayOfWeek}>Mo</div>
            <div className={styles.dayOfWeek}>Tu</div>
            <div className={styles.dayOfWeek}>We</div>
            <div className={styles.dayOfWeek}>Th</div>
            <div className={styles.dayOfWeek}>Fr</div>
            <div className={styles.dayOfWeek}>Sa</div>
            <button className={styles.day}>1</button>
            <button className={styles.day}>2</button>
            <button className={styles.day}>3</button>
            <button className={styles.day}>4</button>
            <button className={styles.day}>5</button>
            <button className={styles.day}>6</button>
            <button className={styles.day}>7</button>
            <button className={styles.day}>8</button>
            <button className={styles.day}>9</button>
            <button className={styles.day}>10</button>
            <button className={styles.day}>11</button>
            <button className={styles.day}>12</button>
            <button className={styles.day}>13</button>
            <button className={styles.day}>14</button>
            <button className={styles.day}>15</button>
            <button className={styles.day}>16</button>
            <button className={styles.day}>17</button>
            <button className={styles.day}>18</button>
            <button className={styles.day}>19</button>
            <button className={styles.day}>20</button>
            <button className={styles.day}>21</button>
            <button className={styles.day}>22</button>
            <button className={styles.day}>23</button>
            <button className={styles.day}>24</button>
            <button className={styles.day}>25</button>
            <button className={styles.day}>26</button>
            <button className={styles.day}>27</button>
            <button className={styles.day}>28</button>
            <button className={styles.day}>29</button>
            <button className={styles.day}>30</button>
            <button className={styles.day}>31</button>
            <button className={styles.day}>p</button>
            <button className={styles.day}>p</button>
            <button className={styles.day}>p</button>
            <button className={styles.day}>p</button>
          </div>
        </div>
      </div>

      <div>
        <button>Clear dates</button>
      </div>
    </div>
  );
};
