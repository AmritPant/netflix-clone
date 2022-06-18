import React from 'react';
import NetflixLogo from '../../../assets/images/netflix-logo-logout.svg';

function Header() {
  return (
    <header className="loggedOutHome__header">
      <img src={NetflixLogo} alt="Netflix Logo Red Color" />
      <a href="/login">Sign In</a>
    </header>
  );
}

export default Header;
