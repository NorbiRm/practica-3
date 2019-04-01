import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import ForeCast from '../ForeCast/ForeCast.js'
var TodoActions = require('../Actions/AppActions.js');
var TodoStore = require('../Store/Store.js');
var pronosticos = [];

class Dias extends Component {

  state={
        list: TodoStore.getList()
    };

    getInitialState =() => {
        return TodoStore.getList();
    }

    componentDidMount() {
        console.log(this.props.city);
        TodoStore.addChangeListener(this._onChange);
        TodoActions.getWheather(this.props.city);
        var data = Array.from(this.state.list);
        if(this.state.list) {
          data.forEach(item => {
            var forecast = Array.from(item.forecast.forecastday);
            forecast.forEach((element, i) => {
              pronosticos.push(<ForeCast key={i} element={element} />);
            });
          });
        }
    }

    _onChange = () => {
        this.setState({list: TodoStore.getList()});
    }


    render() {

        return (
            <div>
              <Grid container>
                  {pronosticos}
              </Grid>
            </div>
        );
    }
}

export default Dias;
