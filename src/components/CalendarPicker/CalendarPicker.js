import React from 'react';
import styles from './styles.module.css';

export const CalendarPicker = ({
  city,
  minNights,
  setStartDate,
  setEndDate,
  setCurrentListing,
  currentListingId,
}) => {
  const [date, setDate] = React.useState([]);

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
  const handleClick = (e) => {
    if (
      !Number(e.target.textContent) > 0 &&
      !Number(e.target.textContent) <= 31
    )
      return;

    let day = e.target.textContent;
    let monthYear =
      e.target.parentElement.previousSibling.firstChild.nextSibling.textContent;

    if (monthYear === 'arrow_forward_ios') {
      monthYear = e.target.parentElement.previousSibling.firstChild.textContent;
    }
    const [month, year] = monthYear.split(' ');

    let monthNum = months.indexOf(month);
    let date = `${year}-${monthNum}-${day}`;
    setDate((prevDate) => {
      return [...prevDate, date];
    });
  };

  React.useEffect(() => {
    let currentDate = date[date.length - 1];
    let previousDate = date[date.length - 2];

    if (date.length === 0) {
      setStartDate(null);
      setEndDate(null);
    }
    if (date.length < 2) {
      setStartDate(currentDate);
      return;
    }
    if (date.length > 1) {
      setStartDate(previousDate);
      setEndDate(currentDate);
    }
    console.log('useeffectman', date.length);
  }, [date, setStartDate, setEndDate]);

  return (
    <div
      onClick={handleClick}
      className={styles.container}
      id='calendar-container'
    >
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

      <div className={styles.clearDates}>
        <button onClick={() => setDate([])}>Clear dates</button>
      </div>
    </div>
  );
};
