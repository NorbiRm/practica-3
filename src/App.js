import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Main from './Main/Main.js';
import ForeCast from './ForeCast/ForeCast.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
            <Route path='/' exact component={Main} />
            <Route path='/Main' exact component={Main} />
            <Route path='/:city' exact component={ForeCast} />

      </BrowserRouter>

      </div>
    );
  }
}

export default App;
