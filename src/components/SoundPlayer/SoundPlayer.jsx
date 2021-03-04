import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { VolumeDown, VolumeUp } from '@material-ui/icons';
import { setIsSound } from '../../store/action/settingsAction';
import { setParamToLocalStorage } from '../../utils/setParamToLocalStorage';
// import { Sound } from '../Sound/Sound';

export const SoundPlayer = (props) => {
  const dispatch = useDispatch();
  const soundVolume = useSelector((state) => state.settings.isSoundOn || 0);
  const [value, setValue] = useState(soundVolume);

  const setSound = (volume) => dispatch(setIsSound(volume));

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSound(newValue);
    setParamToLocalStorage('isSoundOn', value);
  };
  return (
    <div className={props.clas}>
      <Typography variant="h6" className="sound__text">
        Sound:
      </Typography>
      {
        value
          ? <VolumeDown className="icon__up" onClick={() => handleChange(null, 0)} />
          : <VolumeUp className="icon__down" onClick={() => handleChange(null, 1)} />
      }
    </div>
  );
};
