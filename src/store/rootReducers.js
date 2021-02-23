import { combineReducers } from 'redux';
import { settingsReducer } from './reducer/settingsReducer';

export const rootReducers = combineReducers({
  settings: settingsReducer,
});
