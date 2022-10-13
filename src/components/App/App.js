import styles from './styles.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Listing, NotFound, User, Checkout } from 'pages';
import { Header, Footer, TestComponent } from 'components';
import {
  tempSet,
  tempAdd,
  listingsCollectionRef,
  scrollBarWidgetRef,
  usersCollectionRef,
  userInteractions,
  auth,
  provider,
} from 'utils/Firebase';
import React from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {
  getRedirectResult,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

export const App = () => {
  const TIMEOUT = 0;
  const [listings, setListings] = React.useState({});
  const [scrollBar, setScrollBar] = React.useState([]);
  const [users, setUsers] = React.useState({});
  const [reviews, setReviews] = React.useState({});
  const [currentListing, setCurrentListing] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState({});
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  onAuthStateChanged(
    auth,
    (user) => {
      setCurrentUser(user);
    },
    []
  );

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setCurrentUser(result);
    } catch (error) {
      console.log(error);
    }
  };

  const signout = async () => {
    try {
      await signOut(auth);
      console.log('signed out!');
    } catch (error) {
      console.log(error);
    }
  };

  const signin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    // Only activate to add to Firestore
    tempSet();
    // tempAdd();
  }, []);

  React.useEffect(() => {
    const getListings = async () => {
      const data = await getDocs(listingsCollectionRef);
      let listings = {};
      data.docs.forEach((doc) => (listings[doc.id] = doc.data()));
      setListings(listings);
    };

    setTimeout(() => {
      getListings();
    }, TIMEOUT);
  }, []);

  React.useEffect(() => {
    const getScrollBarWidgets = async () => {
      const data = await getDocs(scrollBarWidgetRef);
      let x = await data.docs.map((doc) => doc.data())[0].scrollBarOptions1;
      setScrollBar(x);
    };

    setTimeout(() => {
      getScrollBarWidgets();
    }, TIMEOUT);
  }, []);

  React.useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      let users = {};
      data.docs.forEach((doc) => (users[doc.id] = doc.data()));
      setUsers(users);
    };

    setTimeout(() => {
      getUsers();
    }, TIMEOUT);
  }, []);

  React.useEffect(() => {
    const getReviews = async () => {
      const data = await getDocs(userInteractions);

      let reviews = {};
      data.docs.forEach((doc) => (reviews[doc.id] = doc.data()));
      setReviews(reviews);
    };

    getReviews();
  }, []);

  const showSlider = () => {
    return window.location.pathname === '/' ? true : null;
  };

  const getUserData = async () => {
    const userData = await getRedirectResult(auth);
  };

  getUserData();

  return (
    <div className={styles.container}>
      {/* {console.log(listings)}
      {console.log(startDate, endDate)} */}
      <Header
        scrollBar={scrollBar}
        showSlider={showSlider()}
        currentUser={currentUser}
        signInWithGoogle={signInWithGoogle}
        signout={signout}
        signin={signin}
      />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home listingsData={listings} />} />
          <Route
            path='/users/show/:user_id'
            element={<User listingsData={listings} users={users} />}
          />
          <Route path='/test' element={<TestComponent />} />
          <Route
            path='/checkout'
            element={
              <Checkout
                currentUser={currentUser}
                startDate={startDate}
                endDate={endDate}
                currentListing={currentListing}
                listingsData={listings}
              />
            }
          />
          <Route
            path='/listing/:listing_id'
            element={
              <Listing
                startDate={startDate}
                endDate={endDate}
                usersData={users}
                reviewsData={reviews}
                listingsData={listings}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                setCurrentListing={setCurrentListing}
                currentListing={currentListing}
              />
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
