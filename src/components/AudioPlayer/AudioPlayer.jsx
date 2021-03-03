import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactHowler from 'react-howler';
import { Grid, Typography, Slider } from '@material-ui/core';
import { VolumeDown, VolumeUp } from '@material-ui/icons';
import { setIsMusic } from '../../store/action/settingsAction';
import { setParamToLocalStorage } from '../../utils/setParamToLocalStorage';
import './audio.scss';

export const AudioPlayer = ({
  url, format, autoplay, loop, mute, parametr,
}) => {
  const dispatch = useDispatch();
  const musicVolume = useSelector((state) => state.settings.isMusiсOn || 0);
  const [value, setValue] = useState(musicVolume);

  const setMusic = (volume) => dispatch(setIsMusic(volume));

  const handleChange = (event, newValue) => {
    setValue(newValue / 100);
    setMusic(newValue / 100);
    setParamToLocalStorage('isMusiсOn', value);
  };
  return (
    <Grid container spacing={2}>
      <Grid>
        <Typography variant="h6" className="music__text">
          {parametr}
        </Typography>
      </Grid>

      <Grid item xs>
        <Grid item>
          <VolumeDown onClick={() => handleChange(null, 0)} />
        </Grid>
        <Slider
          className="slider__width"
          value={value * 100}
          onChange={handleChange}
          color="secondary"
          aria-labelledby="continuous-slider"
        />
        <Grid item>
          <VolumeUp onClick={() => handleChange(null, 100)} />
        </Grid>
      </Grid>

      <ReactHowler
        src={url}
        playing={autoplay}
        format={format}
        volume={value}
        loop={loop}
        mute={mute}
        preload
        html5
      />
    </Grid>
  );
};
