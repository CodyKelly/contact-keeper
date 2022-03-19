import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth/authContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { user, isAuthenticated } = authContext;

  return (
    <div className='navbar bg-primary'>
      <h1>
        <Link to='/'>
          <i className={icon} /> {title}
        </Link>
      </h1>
      {user && <p className=''>Welcome, {user.name}</p>}
      <ul>
        <li>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          {!isAuthenticated && <Link to='/register'>Register</Link>}
          {!isAuthenticated && <Link to='/login'>Login</Link>}
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt',
};

export default Navbar;
