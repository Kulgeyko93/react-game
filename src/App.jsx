import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Game } from './pages/Game/Game';
import { About } from './pages/About/About';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { GameWithBot } from './components/GameWithBot/GameWithBot';

import './App.scss';

export const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <main className="main">

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/game" component={Game} />
          <Route path="/playWithBot" component={GameWithBot} />
          <Route path="/about" component={About} />
        </Switch>

      </main>
      <Footer />
    </div>
  </BrowserRouter>
);
