import { FIRST_SER_NAME } from '../types';
import { defaultSettings } from '../defaultState';

export const settingsReducer = (state = defaultSettings, action) => {
  const { payload, type } = action;
  switch (type) {
    case FIRST_SER_NAME: {
      return {
        ...state,
        firstUserName: payload,
      };
    }
    default: {
      return state;
    }
  }
};
