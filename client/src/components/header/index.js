import React from 'react';
import logo from './logo.svg';
import './index.styl';

const Header = () => (
  <header className="header">
    <img src={logo} className="header-logo" alt="logo" />
    <h1
      className="header-title"
    >
      Find who he/she is
    </h1>
  </header>
);

export default Header;
