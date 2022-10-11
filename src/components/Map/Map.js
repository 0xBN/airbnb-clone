import React from 'react';
import styles from './styles.module.css';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

export const Map = ({ center, city, state, country }) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({ googleMapsApiKey: apiKey });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <div className={styles.container}>
        <div className='sectionTitle'>Where you'll be</div>
        <div>
          <GoogleMap
            zoom={14}
            center={center}
            mapContainerClassName={styles.mapContainer}
          >
            <MarkerF position={center} />
          </GoogleMap>
        </div>
        <div>
          {city}, {state}, {country}
        </div>
      </div>
    </div>
  );
};

// const Map2 = () => {
//   const center = { lat: 41.9113, lng: -87.6898 };
// };
