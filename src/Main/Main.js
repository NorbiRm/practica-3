import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import logo from '../logo.png';
import './Main.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
var citySearched;

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      City : ""
    };
    this.citySearched = true;
    this.changeState = this.changeState.bind(this);
  }
  changeState(newState) {
    this.setState({
        City : newState,
    });
  }

  render() {

    return (
        <div className="principal">
          <img src={logo} className="App-logo" alt="logo" />

            <TextField id="city" label="Ciudad" placeholder="Inserta una Ciudad"/>
            <Button variant="contained" color="primary">
              Buscar
            </Button>

        </div>
    );
  }
}

export default Main;
