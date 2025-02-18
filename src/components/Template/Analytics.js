import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const { NODE_ENV, REACT_APP_GA_TRACKING_ID } = process.env;

if (NODE_ENV === 'production') {
  console.log('NODE_ENV:', NODE_ENV);
  console.log('REACT_APP_GA_TRACKING_ID:', REACT_APP_GA_TRACKING_ID);
  ReactGA.initialize(REACT_APP_GA_TRACKING_ID);
}

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (NODE_ENV === 'production') {
      ReactGA.set({
        page: pathname,
      });
    }
  }, [pathname]);

  return null;
};

export default Analytics;
