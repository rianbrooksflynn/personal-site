import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const PageNotFound = () => (
  <HelmetProvider>
    <div className="not-found">
      <Helmet title="404 Not Found">
        <meta
          name="description"
          content="The content you are looking for cannot be found."
        />
      </Helmet>
      <h1>Page Not Found</h1>
      <img src={`${PUBLIC_URL}/images/404.jpg`} alt="Rian as a small child" />
      <p>
        Unless you were looking for a photo of Rian as a small child, in which case,
        congrats, you&apos;ve found it.
      </p>
      <p>
        Return <Link to="/">home</Link>.
      </p>
    </div>
  </HelmetProvider>
);

export default PageNotFound;
