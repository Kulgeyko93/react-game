import { FIRST_SER_NAME } from '../types';

export const setFirstUserName = (payload) => (dispatch) => {
  dispatch({ type: FIRST_SER_NAME, payload });
};
