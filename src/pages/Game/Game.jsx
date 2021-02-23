/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-spaced-func */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup, Checkbox } from '@material-ui/core';
import { Player } from './Player/Player';
import { setFirstUserName } from '../../store/action/settingsAction';
import './game.scss';

export const Game = () => {
  const dispatch = useDispatch();
  const [isBot, setIsBot] = React.useState(true);

  const firstUserNameInitial = useSelector((state) => state.settings.firstUserName);

  const setFirstName = (name) => dispatch(setFirstUserName(name));
  // eslint-disable-next-line func-call-spacing
  return (
    <div className="game">
      <div className="game__bot__text">
        Bot or human
      </div>
      <div className="humanOrBot">
        <Checkbox
          checked={isBot}
          onChange={() => setIsBot(true)}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <div>bot</div>
        <Checkbox
          checked={!isBot}
          onChange={() => setIsBot(false)}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <div>human</div>
      </div>

      <div className="gamers">
        {firstUserNameInitial}
        <Player text="First gamer:" onChange={setFirstName} />
        <Player text="Second gamer:" />
      </div>
      <div className="game__answer">
        <ButtonGroup color="secondary" aria-label="outlined primary button group">
          <Button className="game__answer__rook">Rook</Button>
          <Button>Paper</Button>
          <Button>Scissors</Button>
        </ButtonGroup>
      </div>
      <div className="preview__answer">Rook</div>
      <Button variant="contained" color="secondary">
        Start Game
      </Button>
    </div>
  );
};
