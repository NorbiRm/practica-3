import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Dias from '../Dias/Dias.js'
import Typography from '@material-ui/core/Typography';

class ForeCast extends Component {
  render() {
    return (
        <div>
        <Grid container>
              <Grid item xs={12} lg={6}>
                    <h2>{this.props.match.params.city}</h2>
              </Grid>
          </Grid>
          <Dias city={this.props.match.params.city}/>
        </div>
    );
  }
}

export default ForeCast;
