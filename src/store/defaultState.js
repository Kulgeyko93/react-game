export const defaultSettings = {
  firstUserName: JSON.parse(localStorage.getItem('settings_react_game')).firstUserName || 'Gamer 1',
  isMusiсOn: JSON.parse(localStorage.getItem('settings_react_game')).isMusiсOn ?? 0.4,
  iSoundOn: JSON.parse(localStorage.getItem('settings_react_game')).isSoundOn || 0,
};

export const defaultGame = {
  resultFirstUser: JSON.parse(localStorage.getItem('settings_react_game')).resultFirstUser || 'Rock',
  botAnswer: JSON.parse(localStorage.getItem('settings_react_game')).botAnswer !== 0
    ? JSON.parse(localStorage.getItem('settings_react_game')).botAnswer
    : 0
    || 'Rock',
  stats: JSON.parse(localStorage.getItem('settings_react_game')).stats || 0,
};
