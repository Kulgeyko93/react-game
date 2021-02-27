import {
  RESULTS_FIRST_USER, RESULTS_SECOND_USER, STATS_GAME, BOT_ANSWER,
} from '../types';

export const setResultFirstUser = (payload) => (dispatch) => {
  dispatch({ type: RESULTS_FIRST_USER, payload });
};
export const setResultSecondUser = (payload) => (dispatch) => {
  dispatch({ type: RESULTS_SECOND_USER, payload });
};
export const setBotAnswer = (payload) => (dispatch) => {
  dispatch({ type: BOT_ANSWER, payload });
};
export const setStatsGame = (payload) => (dispatch) => {
  dispatch({ type: STATS_GAME, payload });
};
