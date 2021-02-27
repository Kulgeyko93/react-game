import {
  FIRST_SER_NAME, SECOND_SER_NAME, IS_BOT, IS_MUSIC, IS_SOUND,
} from '../types';

export const setFirstUserName = (payload) => (dispatch) => {
  dispatch({ type: FIRST_SER_NAME, payload });
};
export const setSecondUserName = (payload) => (dispatch) => {
  dispatch({ type: SECOND_SER_NAME, payload });
};
export const setIsBot = (payload) => (dispatch) => {
  dispatch({ type: IS_BOT, payload });
};
export const setIsMusic = (payload) => (dispatch) => {
  dispatch({ type: IS_MUSIC, payload });
};
export const setIsSound = (payload) => (dispatch) => {
  dispatch({ type: IS_SOUND, payload });
};
