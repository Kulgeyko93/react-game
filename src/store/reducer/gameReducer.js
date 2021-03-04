import { RESULTS_FIRST_USER, STATS_GAME, BOT_ANSWER } from '../types';
import { defaultGame } from '../defaultState';

export const gameReducer = (state = defaultGame, action) => {
  const { payload, type } = action;
  switch (type) {
    case RESULTS_FIRST_USER: {
      return {
        ...state,
        resultFirstUser: payload,
      };
    }
    case STATS_GAME: {
      return {
        ...state,
        stats: payload,
      };
    }
    case BOT_ANSWER: {
      return {
        ...state,
        botAnswer: payload,
      };
    }
    default: {
      return state;
    }
  }
};
