import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="A headshot of Rian Flynn" />
      </Link>
      <header>
        <h2>Rian Flynn</h2>
        <h3><a href="https://pronouns.org/they-them" target="_blank" rel="noopener noreferrer">they/them</a></h3>
        <p>
          <a href="mailto:rian@rianflynn.com">rian@rianflynn.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>Intro</h2>
      <p>
        Hi, I&apos;m Rian. I am a 2024&ndash;2025{' '}
        <a href="https://a3d3.ai/">A3D3</a> Postbaccalaureate Fellow, working with
        {' '}<a href="https://mia.physics.purdue.edu/">Prof. Miaoyuan Liu</a>
        {' '}at Purdue.
        I was previously a software engineer at <a href="https://www.seeq.com/">Seeq</a>,
        and I received my S.B. in physics and theater arts from MIT.
      </p>
      <ul className="actions">
        <li>
          <Link to="/about" className="button">
            About Me
          </Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Rian Flynn <Link to="/">rianflynn.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
