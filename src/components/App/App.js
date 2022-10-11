import styles from './styles.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Listing, NotFound, User } from 'pages';
import { Header, Footer } from 'components';
import {
  tempSet,
  tempAdd,
  listingsCollectionRef,
  scrollBarWidgetRef,
  usersCollectionRef,
  userInteractions,
} from 'utils/Firebase';
import React from 'react';
import { collection, getDocs } from 'firebase/firestore';

export const App = () => {
  const TIMEOUT = 2000;
  const [listings, setListings] = React.useState({});
  const [scrollBar, setScrollBar] = React.useState([]);
  const [users, setUsers] = React.useState({});
  const [reviews, setReviews] = React.useState({});

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

  return (
    <div className={styles.container}>
      {/* {console.log(reviews)} */}
      <Header scrollBar={scrollBar} showSlider={showSlider()} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home listingsData={listings} />} />
          <Route
            path='/users/show/:user_id'
            element={<User listingsData={listings} users={users} />}
          />
          <Route
            path='/listing/:listing_id'
            element={
              <Listing
                usersData={users}
                reviewsData={reviews}
                listingsData={listings}
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
