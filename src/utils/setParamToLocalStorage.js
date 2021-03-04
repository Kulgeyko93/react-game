export const setParamToLocalStorage = (paramName, param) => {
  const getSettings = JSON.parse(localStorage.getItem('settings_react_game') || '{}');
  localStorage.removeItem('settings_react_game');
  getSettings[paramName] = param;
  return localStorage.setItem('settings_react_game', JSON.stringify(getSettings));
};
