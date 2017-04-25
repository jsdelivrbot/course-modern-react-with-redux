import React, { Component } from 'react';
import SearchBar from './search_bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React simple starter</h1>
        <SearchBar/>
      </div>
    );
  }
}
