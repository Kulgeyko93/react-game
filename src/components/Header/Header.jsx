import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import { AudioPlayer } from '../AudioPlayer/AudioPlayer';
import './header.scss';

export const Header = () => (
  <div className="header">
    <AppBar position="static" color="primary">
      <Toolbar className="header__container">
        <Typography variant="h6" className="news">
          <NavLink to="/" exact>
            Home
          </NavLink>
        </Typography>
        <Typography variant="h6" className="news">
          <NavLink to="/game">
            Game
          </NavLink>
        </Typography>
        <Typography variant="h6" className="news">
          <NavLink to="/about">
            About
          </NavLink>
        </Typography>
        <Typography variant="h6" className="news">
          <AudioPlayer
            url="https://zvukipro.com/uploads/files/2019-05/1559048585_436d3faaae06e71.mp3"
            playing
            format={['mp3']}
            loop
            mute={false}
            parametr="Music:"
          />
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);
