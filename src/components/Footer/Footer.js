import styles from './styles.module.css';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerContent}>
        <div className={styles.left}>
          <ul>
            <li>© 2022 Airbnb, Inc.</li>
            <li>·</li>
            <li>Privacy</li>
            <li>·</li>
            <li>Terms</li>
            <li>·</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className={styles.right}>
          <ul>
            <li className={styles.iconFormat}>
              <span className='material-symbols-outlined'>language</span>
              English(US)
            </li>
            <li></li>
            <li className={styles.iconFormat}>
              <span className='material-symbols-outlined'>attach_money</span>{' '}
              USD
            </li>
            <li></li>
            <li className={styles.iconFormat}>
              Support & resources
              <span className='material-symbols-outlined'>expand_less</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
