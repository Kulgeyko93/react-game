import React from 'react';
import { TextFieldInput } from '../../../constants/textField';
import './player.scss';

export const Player = (props) => (
  <div className="player">
    <div className="secondUser__name">
      {props.text}
    </div>
    <TextFieldInput
      disabled={false}
      helperText=""
      label={props.gamerName}
      placeholder="Enter gamer name"
      size="small"
      variant="outlined"
      onChange={(e) => props.onChangeName(e)}
    />
  </div>
);
