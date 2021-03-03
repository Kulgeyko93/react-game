import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, ButtonGroup, TextField } from '@material-ui/core';
import { setFirstUserName } from '../../store/action/settingsAction';
import { setResultFirstUser, setBotAnswer, setStatsGame } from '../../store/action/gameAction';
import { generateAnswer } from '../../utils/generateAnswer';
import { setParamToLocalStorage } from '../../utils/setParamToLocalStorage';
import paper from '../../assets/img/icon-paper.svg';
import rock from '../../assets/img/icon-rock.svg';
import scissors from '../../assets/img/icon-scissors.svg';

import './game.scss';

export const Game = () => {
  const dispatch = useDispatch();

  const firstUserNameInitial = useSelector((state) => state.settings.firstUserName);
  const resultFirstInitial = useSelector((state) => state.game.resultFirstUser);

  const setFirstName = (name) => dispatch(setFirstUserName(name));
  const setResultFirst = (result) => dispatch(setResultFirstUser(result));
  const setBotResult = (result) => dispatch(setBotAnswer(result));
  const setStats = (result) => dispatch(setStatsGame(result));

  const [image, setImage] = useState(resultFirstInitial);

  return (
    <div className="game__container">

      <div className="gamers">
        <div className="gamers__text">Gamer name:</div>
        <TextField
          id="standard-basic"
          className="gamers__"
          label={firstUserNameInitial}
          disabled={false}
          placeholder="Enter name ..."
          size="small"
          variant="filled"
          autoFocus={false}
          onChange={(e) => {
            setFirstName(e.target.value);
            setParamToLocalStorage('firstUserName', e.target.value);
          }}
        />
      </div>
      <div className="answer">
        <div className="answer__text">Answer gamer:</div>
        <ButtonGroup className="answer__group" color="secondary" aria-label="outlined primary button group">
          <Button
            className="game__answer__rook"
            onClick={() => {
              setResultFirst('Rock');
              setParamToLocalStorage('resultFirstUser', 'Rock');
              setImage('Rock');
            }}
          >
            Rock
          </Button>
          <Button onClick={() => {
            setResultFirst('Paper');
            setParamToLocalStorage('resultFirstUser', 'Paper');
            setImage('Paper');
          }}
          >
            Paper
          </Button>
          <Button onClick={() => {
            setResultFirst('Scissors');
            setParamToLocalStorage('resultFirstUser', 'Scissors');
            setImage('Scissors');
          }}
          >
            Scissors
          </Button>
        </ButtonGroup>
      </div>
      <div className="answer_show">
        {
          image === 'Paper'
            ? <img src={paper} alt="paper" />
            : image === 'Rock'
              ? <img src={rock} alt="rock" />
              : <img src={scissors} alt="scissors" />
        }

      </div>
      <div className="clear">
        <div className="clear__text">Clear statistics:</div>
        <Button
          className="clear__button"
          variant="contained"
          onClick={() => {
            setStats(0);
            setParamToLocalStorage('stats', 0);
          }}
        >
          Clear stats
        </Button>
      </div>
      <Button
        className="start__game"
        variant="contained"
        color="secondary"
        onClick={() => {
          setBotResult(generateAnswer());
          setParamToLocalStorage('botAnswer', 'Scissors');
        }}
      >
        <NavLink to="/playWithBot">
          Start Game
        </NavLink>
      </Button>
    </div>
  );
};
