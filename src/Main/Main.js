import React, { Component } from 'react';
import logo from '../logo.png';
import './Main.scss';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
var citySearched;

class Main extends Component {
  state = {
      City : "",
      citySearched: false,
    };

  getWeather=()=> {
    if(this.state.citySearched){
      return <Redirect to={'/' + this.state.city} />
    }
  }

  setCity = () =>{
    if(document.getElementById('city').value !== '' && document.getElementById('city').value !== undefined)
      this.setState({city: document.getElementById('city').value,
           citySearched: true});
  }

  render() {

    return (
        <div className="principal">
          {this.getWeather()}
          <img src={logo} className="App-logo" alt="logo" />
            <TextField id="city" label="Ciudad" placeholder="Inserta una Ciudad"/>
            <Button variant="contained" color="primary" onClick={this.setCity}>
              Buscar
            </Button>

        </div>
    );
  }
}

export default Main;
