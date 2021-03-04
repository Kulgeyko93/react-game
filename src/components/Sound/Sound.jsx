import React from 'react';
import ReactHowler from 'react-howler';

export const Sound = ({ play, onPlay }) => (
  <ReactHowler
    src="https://noisefx.ru/noise_base/obect/ofis/00171.mp3"
    playing={play}
    format={['mp3']}
    volume={JSON.parse(localStorage.getItem('settings_react_game')).isSoundOn}
    loop={false}
    onEnd={() => {
      onPlay(false);
    }}
    preload
    html5
  />
);
