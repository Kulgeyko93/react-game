export const compareResults = (botResult, userResult, userName) => {
  let botWinner;
  let userWinner;
  let result = 'Draw';
  switch (true) {
    case botResult === 'Rock' && userResult === 'Scissors': {
      botWinner = true;
      userWinner = false;
      break;
    }
    case botResult === 'Rock' && userResult === 'Paper': {
      botWinner = false;
      userWinner = true;
      break;
    }
    case botResult === 'Scissors' && userResult === 'Paper': {
      botWinner = true;
      userWinner = false;
      break;
    }
    case botResult === 'Scissors' && userResult === 'Rock': {
      botWinner = false;
      userWinner = true;
      break;
    }
    case botResult === 'Paper' && userResult === 'Rock': {
      botWinner = true;
      userWinner = false;
      break;
    }
    case botResult === 'Paper' && userResult === 'Scissors': {
      botWinner = false;
      userWinner = true;
      break;
    }
    default: {
      botWinner = false;
      userWinner = false;
    }
  }

  if (botWinner && !userWinner) result = 'Bot winner';
  if (!botWinner && userWinner) result = `${userName} winner`;

  return result;
};
