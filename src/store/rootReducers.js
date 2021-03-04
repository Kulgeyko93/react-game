import { combineReducers } from 'redux';
import { settingsReducer } from './reducer/settingsReducer';
import { gameReducer } from './reducer/gameReducer';

export const rootReducers = combineReducers({
  settings: settingsReducer,
  game: gameReducer,
});
