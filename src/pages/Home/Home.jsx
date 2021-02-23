import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.scss';

export const Home = () => (
  <div className="home__page">
    <NavLink to="/game">
      <div className="game__link">Game</div>
    </NavLink>
    <NavLink to="/settings">
      <div className="settings__link">Settings</div>
    </NavLink>
  </div>
);
