import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { compareResults } from '../../utils/compareResults';
import { setStatsGame } from '../../store/action/gameAction';
import { setParamToLocalStorage } from '../../utils/setParamToLocalStorage';
import paper from '../../assets/img/icon-paper.svg';
import rock from '../../assets/img/icon-rock.svg';
import scissors from '../../assets/img/icon-scissors.svg';
import './gameWIthBot.scss';

export const GameWithBot = () => {
  const dispatch = useDispatch();
  const resultsFirstUser = useSelector((state) => state.game.resultFirstUser);
  const botResults = useSelector((state) => state.game.botAnswer);
  const firstUserName = useSelector((state) => state.settings.firstUserName);
  const statsInitial = useSelector((state) => state.game.stats);
  const [time, setTime] = useState(3);

  const setStats = (result) => dispatch(setStatsGame(result));

  const setWinInStats = (result) => {
    if (result === 'Bot winner') {
      setParamToLocalStorage('stats', statsInitial - 1);
      return setStats(statsInitial - 1);
    }
    if (result === 'Draw') {
      return '';
    }
    setParamToLocalStorage('stats', statsInitial + 1);
    return setStats(statsInitial + 1);
  };

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
    if (time === 0) {
      setWinInStats(compareResults(botResults, resultsFirstUser, firstUserName));
    }
  }, [time]);

  return (
    <div className="play">
      <div className="play__stats">
        <div className="play__stats__text">STATS</div>
        <div className="play__stats__result">{statsInitial}</div>
      </div>
      <div className="play__results">
        <div className="play__results__firstUser">
          {
            resultsFirstUser === 'Paper'
              ? <img src={paper} alt="paper" />
              : resultsFirstUser === 'Rock'
                ? <img src={rock} alt="rock" />
                : <img src={scissors} alt="scissors" />
          }

        </div>
        <div className="play__results__timer">
          {
            time !== 0 ? <div className="timer__show">{time}</div>
              : (
                <div className="timer__show">
                  <span>{compareResults(botResults, resultsFirstUser, firstUserName)}</span>

                </div>
              )
          }
        </div>
        <div className="results__winner">
          <div className="play__results__bot">
            { time !== 0 ? time
              : botResults === 'Paper'
                ? <img src={paper} alt="paper" />
                : botResults === 'Rock'
                  ? <img src={rock} alt="rock" />
                  : <img src={scissors} alt="scissors" />}
          </div>
        </div>

      </div>
      <div className="btn">
        {time !== 0 ? ''
          : (
            <div>
              <Button
                variant="outlined"
                color="secondary"
              >
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </Button>
              <Button
                variant="outlined"
                color="secondary"
              >
                <NavLink to="/game" exact>
                  Play again
                </NavLink>
              </Button>
            </div>
          )}
      </div>
    </div>
  );
};
