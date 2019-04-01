import React from 'react';
import ForeCast from '../ForeCast/ForeCast.js';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

class Pronostico extends React.Component{

    render() {
      var clima = [];
      var data = Array.from(this.props.list.list);
      if(this.props.list.list !== undefined && this.props.list.list !== null) {
        data.forEach(item => {
          if(item !== undefined){
          var forecast = Array.from(item.forecast.forecastday);
          forecast.forEach((element, i) => {
            clima.push(<ForeCast key={i} element={element} />);
          });
          }
        });
      }else{
        this.render();
      }

      return(
        <div>
            <Grid container direction="row">
              {clima}
            </Grid>
             <Link to="/">principal</Link>
        </div>
      )
    }

  };

  export default Pronostico
