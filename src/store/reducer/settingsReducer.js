import {
  FIRST_SER_NAME, SECOND_SER_NAME, IS_BOT, IS_MUSIC, IS_SOUND,
} from '../types';
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
    case SECOND_SER_NAME: {
      return {
        ...state,
        secondUserName: payload,
      };
    }
    case IS_BOT: {
      return {
        ...state,
        bot: payload,
      };
    }
    case IS_MUSIC: {
      return {
        ...state,
        isMusicOn: payload,
      };
    }
    case IS_SOUND: {
      return {
        ...state,
        isSoundOn: payload,
      };
    }
    default: {
      return state;
    }
  }
};
