import React from 'react';
import NetflixLogo from '../../assets/images/netflix-logo-logout.svg';

function Header(props) {
  return (
    <header className="loggedOutHome__header">
      <a href="/">
        <img src={NetflixLogo} alt="Netflix Logo Red Color" />
      </a>
      {props.showLoginButton !== 'false' && (
        <a href="/login" className="button-primary">
          Sign In
        </a>
      )}
    </header>
  );
}

export default Header;
