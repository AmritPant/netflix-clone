import React from 'react';
import Header from '../../components/Header/Header';
import LoginBox from '../../components/LoginBox/LoginBox';
import './login.scss';

function Login() {
  return (
    <div className="login">
      <Header showLoginButton="false" />
      <LoginBox />
    </div>
  );
}

export default Login;
