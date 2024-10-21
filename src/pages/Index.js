import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Rian Flynn's personal website."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome</Link>
          </h2>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, check out my{' '}
        <Link to="/cv">CV</Link>, or{' '}
        <Link to="/contact">contact me</Link>.
      </p>
      <p>
        {' '}
        Source available{' '}
        <a href="https://github.com/rianbrooksflynn/personal-site">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
