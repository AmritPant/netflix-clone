import React from 'react';
import Header from './Header/Header';
import './LoggedOutHome.scss';
import InfoBox from './InfoBox/InfoBox';

function LoggedOutHome() {
  return (
    <div className="loggedOutHome">
      <Header />
      <InfoBox />
    </div>
  );
}

export default LoggedOutHome;
