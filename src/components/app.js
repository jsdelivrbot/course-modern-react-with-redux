import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';

const YOUTUBE_API_KEY = 'AIzaSyDVHlwVTrJu4cstb1ArMRd7JhLKHL7wruY';

export default class App extends Component {
  constructor( props ) {
    super( props );

    this.state = { videos: [] };
    YTSearch( { key: YOUTUBE_API_KEY, term: 'musictheory' }, videos => this.setState( { videos } ) );
  }

  render() {
    return (
      <div>
        <h1>React simple starter</h1>
        <SearchBar/>
      </div>
    );
  }
}
