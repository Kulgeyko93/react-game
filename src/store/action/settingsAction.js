import {
  FIRST_SER_NAME, IS_MUSIC, IS_SOUND,
} from '../types';

export const setFirstUserName = (payload) => (dispatch) => {
  dispatch({ type: FIRST_SER_NAME, payload });
};
export const setIsMusic = (payload) => (dispatch) => {
  dispatch({ type: IS_MUSIC, payload });
};
export const setIsSound = (payload) => (dispatch) => {
  dispatch({ type: IS_SOUND, payload });
};
