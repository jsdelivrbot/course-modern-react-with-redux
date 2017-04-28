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
      term: 'musictheory',
      videos: [],
      currentVideo: null
    };
    this.youtubeSearch( this.state.term );
  }

  youtubeSearch( term ) {
    YTSearch( { key: YOUTUBE_API_KEY, term: term },
              videos => this.setState( { videos: videos, currentVideo: videos[ 0 ] } ) );
  }

  onSearchChanged( term ) {
    this.setState( { term: term } );
    this.youtubeSearch( this.state.term );
  }

  render() {
    return (
      <div>
        <SearchBar term={this.state.searchterm} onSearchChanged={t => this.onSearchChanged( t )}/>
        <VideoDetail video={this.state.currentVideo}/>
        <VideoList videos={this.state.videos} onSelectVideo={v => this.setState( { currentVideo: v } )}/>
      </div>
    );
  }
}
