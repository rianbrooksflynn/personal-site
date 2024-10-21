import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const CV = () => {
  const [canDisplayPdf, setCanDisplayPdf] = useState(false);

  useEffect(() => {
    setCanDisplayPdf(navigator.pdfViewerEnabled);
  }, []);

  return (
    <Main title="CV" description="Rian Flynn's CV.">
      <article className="post" id="cv">
        <header>
          <div className="title">
            <h2>
              <Link to="cv">CV</Link>
            </h2>
          </div>
        </header>
        <div className="download-link" style={{ textAlign: 'center', marginBottom: '30px' }}>
          <a href={`${PUBLIC_URL}/pdf/Rian-Flynn-CV.pdf`} download>Download CV</a>
        </div>
        {canDisplayPdf ? (
          <div style={{ width: '100%', height: '100vh' }}>
            <iframe
              src={`${PUBLIC_URL}/pdf/Rian-Flynn-CV.pdf#toolbar=0`}
              style={{ width: '100%', height: '100%', border: 'none' }}
              title="CV PDF"
            />
          </div>
        ) : null}
      </article>
    </Main>
  );
};

export default CV;
