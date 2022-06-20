import React from 'react';
import NetflixLogo from '../../assets/images/netflix-logo-logout.svg';

function Header(props) {
  return (
    <header className="loggedOutHome__header">
      <img src={NetflixLogo} alt="Netflix Logo Red Color" />
      {props.showLoginButton !== 'false' && (
        <a href="/login" className="button-primary">
          Sign In
        </a>
      )}
    </header>
  );
}

export default Header;
