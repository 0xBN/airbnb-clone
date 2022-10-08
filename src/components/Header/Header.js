import styles from './styles.module.css';
import logo from '../../shared/logo.svg';
import { SearchWidget, LoginWidget, SideScrollWidget } from 'components';
import { scrollBarOptions } from '../../exampleData';

export const Header = ({ slider }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerNav}>
        <div className={styles.logo}>
          <a href='/'>
            <img src={logo} alt='' />
          </a>
        </div>
        <div className={styles.searchButton}>
          <SearchWidget />
        </div>
        <div className={styles.loginWidget}>
          <LoginWidget />
        </div>
        {slider && (
          <div className={styles.sideScroll}>
            <SideScrollWidget data={scrollBarOptions} />
          </div>
        )}
        {!slider && (
          <div className={styles.cat}>
            {/* <br /> */}
            {/* <br /> */}
          </div>
        )}
      </div>
    </div>
  );
};
