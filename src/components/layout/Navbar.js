import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container-fluid'>
        <h1 className='navbar-brand' href='#'>
          <i className={`${icon} mx-3`}></i>
          {title}
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'bi bi-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
