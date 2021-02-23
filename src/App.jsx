import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Game } from './pages/Game/Game';
import { About } from './pages/About/About';
import { Header } from './components/Header/Header';
import './App.scss';

export const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="header">
        <Header headerClass="header__page" />
      </header>
      <main className="main">

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/game" component={Game} />
        </Switch>

      </main>
      <div className="footer">
        footer
      </div>
    </div>
  </BrowserRouter>
);
