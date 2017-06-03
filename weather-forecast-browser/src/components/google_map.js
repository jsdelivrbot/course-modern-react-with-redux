import React, { Component } from 'react';

const API_KEY = 'AIzaSyCuYNXR8-Hn6taDLeCIYooDerEJvaEheQ8';

export default class GoogleMap extends Component {
  render() {
    // this.refs.map gives direct access to the actual html element after the component is mounted
    return <div ref="map"/>;
  }

  componentDidMount() {
    const location = { lat: this.props.lat, lng: this.props.lon };
    const map = new google.maps.Map( this.refs.map, {
      zoom: 12,
      center: location
    } );
    const marker = new google.maps.Marker( { position: location, map: map } );
  }
}
