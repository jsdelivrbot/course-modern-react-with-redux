import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
        </thead>
        <tbody>
        { this.props.weather.map( this.renderWeather ) }
        </tbody>
      </table>
    );
  }

  renderWeather( city_weather ) {
    return (
      <tr key={city_weather.city.id}>
        <td>{city_weather.city.name}</td>
      </tr>
    );
  }
}

/*
 function mapStateToProps( state ) {
 return { weather: state.weather };
 }

 function mapStateToProps( { weather } ) {
 return { weather: weather };
 }
 */

/*
 This is identical to both of the the above. Uses destructuring and restructuring
 */
function mapStateToProps( { weather } ) {
  return { weather };
}

export default connect( mapStateToProps )( WeatherList );
