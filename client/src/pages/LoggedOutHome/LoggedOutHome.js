import React from 'react';
import Header from '../../components/Header/Header';
import './LoggedOutHome.scss';
import InfoBox from '../../components/InfoBox/InfoBox';

function LoggedOutHome() {
  return (
    <div className="loggedOutHome">
      <Header />
      <InfoBox />
    </div>
  );
}

export default LoggedOutHome;
