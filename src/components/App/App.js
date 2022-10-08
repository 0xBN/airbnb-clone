import styles from './styles.module.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home, Listing, Host } from 'pages';
import { Header, Footer, SearchWidget, LoginWidget } from 'components';

export const App = () => {
  return (
    <div className={styles.container}>
      <Header slider={window.location.pathname === '/' ? true : null} />
      <BrowserRouter>
        <Routes>
          <Route
            path='/test'
            element={[<Host />, <Listing />, <SearchWidget />, <LoginWidget />]}
          />
          <Route path='/' element={<Home />} />
          <Route path='/host' element={<Host />} />
          <Route path='/listing/:listing_id' element={<Listing />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
