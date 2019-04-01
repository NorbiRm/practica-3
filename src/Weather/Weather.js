import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Dias from '../Dias/Dias.js'
import Typography from '@material-ui/core/Typography';

class ForeCast extends Component {
  componentDidMount() {
        console.log(this.props.match.params.city);
    }
  render() {
    return (
        <div>
        <Grid container>
              <Grid item xs={12} lg={6}>
                    <h2>{this.props.match.params.city}</h2>
              </Grid>
        </Grid>
        <Dias city={this.props.match.params.city}></Dias>
        </div>
    );
  }
}

export default ForeCast;
