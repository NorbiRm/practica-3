import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import Pronostico from '../Pronostico/Pronostico.js'
var TodoActions = require('../Actions/AppActions.js');
var TodoStore = require('../Store/Store.js');

class Dias extends Component {

  state={
        list: TodoStore.getList()
    };

    getInitialState =() => {
        return TodoStore.getList();
    }

    _onChange = () => {
        this.setState({list: TodoStore.getList()});
    }

    componentDidMount(){
      console.log(this.props.city);
      TodoStore.addChangeListener(this._onChange);
      TodoActions.getWheather(this.props.city);

    }

    render() {
        {this.getInitialState()}
        return (
            <div>
              <Pronostico list={this.state.list} />
            </div>
        );
    }
}

export default Dias;
