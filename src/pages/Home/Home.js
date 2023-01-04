import styles from './styles.module.css';
import React from 'react';
import { PropertyCard } from 'components';
import { SkeletonHome } from 'skeleton';

export const Home = ({ listingsData }) => {
  const show = (listings) => {
    const propertyList = [];
    for (let key in listings) {
      const { images } = listings[key];
      propertyList.push(
        <PropertyCard
          listingsData={listingsData}
          images={images}
          id={key}
          key={key}
        />
      );
    }
    return propertyList;
  };

  const listingReady = Object.keys(listingsData).length;

  return (
    <div className={styles.container}>
      {listingReady === 0 && <SkeletonHome count={20} />}
      {listingReady !== 0 && (
        <>
          <div className={[styles.propertyCards].join(' ')}>
            {show(listingsData)}
          </div>
          <div className={styles.showMap}>
            <button>
              Show Map <span className='material-symbols-outlined'>map </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};
