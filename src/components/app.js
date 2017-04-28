import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoDetail from './video_detail';
import VideoList from './video_list';

const YOUTUBE_API_KEY = 'AIzaSyDVHlwVTrJu4cstb1ArMRd7JhLKHL7wruY';

export default class App extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      videos: [],
      currentVideo: null
    };
    this.youtubeSearch( 'musictheory' );
  }

  youtubeSearch( term ) {
    YTSearch( { key: YOUTUBE_API_KEY, term: term },
              videos => this.setState( { videos: videos, currentVideo: videos[ 0 ] } ) );
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.currentVideo}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
