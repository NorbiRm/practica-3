import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Forecast.scss';

export default class ForeCast extends Component {

    render() {
        console.log("entro a forecast");
        console.log(this.props.element);

        return (
            <Grid item lg={4} xs={12} className="Pronostico">
                <div>
                    <div>{this.props.element.date}</div>
                    <div>{this.props.element.day.avgtemp_c} °C</div>
                    <div>{this.props.element.day.condition.text}</div>
                    <img src={this.props.element.day.condition.icon} alt="icono" />
                </div>
            </Grid>
        );
    }
}
