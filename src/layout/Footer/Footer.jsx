// Dependencies
import React from 'react';

// Externals
import './Footer.css';

const Footer = () => {
  return (
    <footer className='page-footer blue-grey'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright Text
          <a className='grey-text text-lighten-4 right' href='#!'>Repositories</a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
