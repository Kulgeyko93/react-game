/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-spaced-func */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, ButtonGroup, Checkbox } from '@material-ui/core';
import { Player } from './Player/Player';
import {
  setFirstUserName, setSecondUserName, setIsBot,
} from '../../store/action/settingsAction';
import { setResultFirstUser, setResultSecondUser, setBotAnswer } from '../../store/action/gameAction';
import { botAnswer } from '../../utils/botAnswer';
import './game.scss';

export const Game = () => {
  const dispatch = useDispatch();

  const firstUserNameInitial = useSelector((state) => state.settings.firstUserName);
  const secondUserNameInitial = useSelector((state) => state.settings.secondUserName);
  const botInitial = useSelector((state) => state.settings.bot);
  const resultFirstInitial = useSelector((state) => state.game.resultFirstUser);
  const resultSecondInitial = useSelector((state) => state.game.resultSecondUser);
  // const isMusicNameInitial = useSelector((state) => state.settings.isMusicOn);
  // const isSoundInitial = useSelector((state) => state.settings.IsSoundOn);

  const setFirstName = (name) => dispatch(setFirstUserName(name));
  const setSecondName = (name) => dispatch(setSecondUserName(name));
  const setBot = (isBot) => dispatch(setIsBot(isBot));
  const setResultFirst = (result) => dispatch(setResultFirstUser(result));
  const setResultSecond = (result) => dispatch(setResultSecondUser(result));
  const setBotResult = (result) => dispatch(setBotAnswer(result));

  // const setMusic = (name) => dispatch(setIsMusic(name));
  // const setSound = (name) => dispatch(setIsSound(name));

  // const [firstGamer, setFirstGamer] = React.useState(firstUserNameInitial);
  // const [secondGamer, setSecondGamer] = React.useState(secondUserNameInitial);
  // eslint-disable-next-line func-call-spacing
  return (
    <div className="game">
      <div className="game__bot__text">
        Bot or human
      </div>
      <div className="humanOrBot">
        bot
        <Checkbox
          checked={botInitial}
          onChange={() => setIsBot(setBot(true))}
          inputProps={{ 'aria-label': 'primary checkbox' }}
          label="bot"
        />
        <Checkbox
          checked={!botInitial}
          onChange={() => setIsBot(setBot(false))}
          inputProps={{ 'aria-label': 'primary checkbox' }}
          label="human"
        />
        human
      </div>

      <div className="gamers">
        {firstUserNameInitial}
        <Player text="First gamer:" gamerName={firstUserNameInitial} onChangeName={setFirstName} />
        <Player text="Second gamer:" gamerName={secondUserNameInitial} onChangeName={setSecondName} />
      </div>
      <div className="game__answer_first">
        <ButtonGroup color="secondary" aria-label="outlined primary button group">
          <Button className="game__answer__rook" onClick={() => setResultFirst('Rock')}>Rock</Button>
          <Button onClick={() => setResultFirst('Paper')}>Paper</Button>
          <Button onClick={() => setResultFirst('Scissors')}>Scissors</Button>
        </ButtonGroup>
      </div>
      <div className="preview__answer">{resultFirstInitial}</div>
      {
        !botInitial ? (
          <div className="game__answer_second">
            <ButtonGroup color="secondary" aria-label="outlined primary button group">
              <Button className="game__answer__rook" onClick={() => setResultSecond('Rock')}>Rock</Button>
              <Button onClick={() => setResultSecond('Paper')}>Paper</Button>
              <Button onClick={() => setResultSecond('Scissors')}>Scissors</Button>
            </ButtonGroup>
            <div className="preview__answer__second">{resultSecondInitial}</div>
            <Button variant="contained" color="secondary">hide</Button>
          </div>
        ) : <div />
      }
      <Button variant="contained" color="secondary" onClick={() => setBotResult(botAnswer())}>
        {botInitial
          ? (
            <NavLink to="/playWithBot">
              Start Game
            </NavLink>
          )
          : (
            <NavLink to="/playWithoutBot">
              Start Game
            </NavLink>
          )}
      </Button>
    </div>
  );
};
