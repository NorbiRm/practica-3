import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Main from './Main/Main.js';
import Weather from './Weather/Weather.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
            <Route path='/' exact component={Main} />
            <Route path='/:city' exact component={Weather} />

      </BrowserRouter>

      </div>
    );
  }
}

export default App;
