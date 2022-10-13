import styles from './styles.module.css';
import logo from '../../shared/logo.svg';
import { SearchWidget, LoginWidget, SideScrollWidget } from 'components';

export const Header = ({
  showSlider,
  scrollBar,
  currentUser,
  signInWithGoogle,
  signout,
  signin,
}) => {
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
          <LoginWidget
            signInWithGoogle={signInWithGoogle}
            currentUser={currentUser}
            signout={signout}
            signin={signin}
          />
        </div>
        {showSlider && (
          <div className={styles.sideScroll}>
            <SideScrollWidget data={scrollBar} />
          </div>
        )}
      </div>
    </div>
  );
};
