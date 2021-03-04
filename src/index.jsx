import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { App } from './App';
import { appStore } from './store/appStore';
import reportWebVitals from './reportWebVitals';

localStorage.setItem('settings_react_game',
  JSON.stringify({
    firstUserName: 'Gamer 1',
    isMusiсOn: 0,
    isSoundOn: 0,
    resultFirstUser: 'Rock',
    botAnswer: 'Rock',
    stats: 0,
  }));

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
