// Dependencies
import React from 'react';

// Externals
import './Header.css';


const Header = () => {
  return (
    <nav className='header__nav blue accent-4'>
      <div className='nav-wrapper'>
        <a href='/' className='brand-logo'>React Movies</a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li><a href='https://github.com/VanSalivan/react-simple-search-movies'>Repositories</a></li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
