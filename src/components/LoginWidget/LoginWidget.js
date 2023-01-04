import React from 'react';
import styles from './styles.module.css';

export const LoginWidget = ({
  currentUser,
  signInWithGoogle,
  signout,
  signin,
}) => {
  const [open, setOpen] = React.useState(false);

  const isLoggedIn = currentUser?.displayName;

  const menuRef = React.useRef();

  React.useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    // remove listener artifacts

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const fnThenClose = (fn) => {
    fn();
    setOpen(false);
  };

  return (
    <div className={styles.container} ref={menuRef}>
      <div className={styles.leftLoginWidget}>
        <div>Become a Host</div>
        {/* {isLoggedIn && <div>Welcome, {currentUser?.displayName}</div>} */}
        <div>
          <span className='material-symbols-outlined'>language</span>
        </div>
      </div>
      <div
        className={[
          styles.menuTrigger,
          open ? styles.menuTriggerActive : styles.menuTriggerInactive,
        ].join(' ')}
        onClick={() => setOpen(!open)}
      >
        <span className='material-symbols-outlined'>menu</span>
        {!isLoggedIn && (
          <span className='material-symbols-outlined'>account_circle</span>
        )}
        {isLoggedIn && (
          <span className={styles.profilePicture}>
            <img src={currentUser?.photoURL} alt='' />
          </span>
        )}
      </div>

      <div
        className={[
          styles.dropDownMenu,
          open ? styles.dropDownMenuActive : styles.dropDownMenuInactive,
        ].join(' ')}
      >
        <ul>
          {!isLoggedIn && (
            <li onClick={() => fnThenClose(signInWithGoogle)}>Sign up</li>
          )}
          {!isLoggedIn && <li onClick={() => fnThenClose(signin)}>Log in</li>}
          {isLoggedIn && <li>Messages</li>}
          {isLoggedIn && <li>Trips</li>}
          {isLoggedIn && <li>Wishlist</li>}
          <hr />
          <li>Host your home</li>
          <li>Host an experience</li>
          {isLoggedIn && <li>Account</li>}
          {isLoggedIn && <hr />}
          <li>Help</li>
          {isLoggedIn && <li onClick={() => fnThenClose(signout)}>Logout</li>}
        </ul>
      </div>
    </div>
  );
};
