import styles from './styles.module.css';
import { PropertyCard } from 'components';
import { listings } from '../../exampleData';
import { nanoid } from 'nanoid';
import { Header } from 'components';

export const Home = () => {
  const propertyList = [];
  const show = (listings) => {
    // console.log(listings);
    for (let key in listings) {
      const { images } = listings[key];
      propertyList.push(
        <PropertyCard images={images} id={key} key={nanoid()} />
      );
    }
    return propertyList;
  };

  return (
    <div className={styles.container}>
      <div className={styles.propertyCards}>{show(listings)}</div>
      <div className={styles.showMap}>
        <button>
          Show Map <span className='material-symbols-outlined'>map </span>
        </button>
      </div>
    </div>
  );
};
