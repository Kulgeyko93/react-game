import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const GameWithBot = (props) => {
  const resultsFirstUser = useSelector((state) => state.game.resultFirstUser);
  const botResults = useSelector((state) => state.game.botAnswer);
  const [time, setTime] = useState(3);

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => setTime(time - 1), 1000);
    }
  }, [time]);
  return (
    <div className={props.headerClass}>
      <div className="results">
        <div className="results__firstUser">
          {resultsFirstUser}
        </div>
        <div className="timer">{time}</div>
        <div className="results__bot">
          {botResults}
        </div>
      </div>
    </div>
  );
};
