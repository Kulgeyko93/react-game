import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = (props) => (
  <div className={props.headerClass}>
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/game">
      Game
    </NavLink>
    <NavLink to="/about">
      About
    </NavLink>
  </div>
);
