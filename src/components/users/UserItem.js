/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <div style={{ textAlign: 'center', display: 'block' }}>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: '60px' }}
        ></img>
      </div>
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired, //ptor (pt for proptypes, o for object, r for required)
};

export default UserItem;
