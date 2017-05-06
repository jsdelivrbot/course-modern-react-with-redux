import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/google_map';
import SimpleChart from '../components/simple_chart';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-bordered table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature (K)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
        { this.props.weather.map( this.renderWeather ) }
        </tbody>
      </table>
    );
  }

  renderWeather( city_weather ) {
    const temperature = city_weather.list.map( data => data.main.temp );
    const pressure = city_weather.list.map( data => data.main.pressure );
    const humidity = city_weather.list.map( data => data.main.humidity );

    // Simplify destructuring from ES6
    const { lon, lat } = city_weather.city.coord;
    return (
      <tr key={city_weather.city.id}>
        <td>
          <h5>{city_weather.city.name}</h5>
          <GoogleMap lon={lon} lat={lat}/>
        </td>
        <td><SimpleChart data={temperature} color="blue" units="K"/></td>
        <td><SimpleChart data={pressure} color="red" units="hPa"/></td>
        <td><SimpleChart data={humidity} color="orange" units="%"/></td>
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
