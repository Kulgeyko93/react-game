export const setDefSettingsToStorage = () => localStorage.setItem(
  'settings_react_game',
  JSON.stringify({
    firstUserName: 'Gamer 1',
    isMusiсOn: false,
    iSoundOn: false,
    resultFirstUser: 'Rock',
    botAnswer: 'Rock',
    stats: 0,
  }),
);
