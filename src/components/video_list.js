import React, { Component } from 'react';
import VideoListItem from './video_list_item';

export default class VideoList extends Component {
  render() {
    const items =
      this.props.videos.map( video => <VideoListItem key={video.etag} video={video} onSelectVideo={this.props.onSelectVideo}/>);
    return (
      <ul className="col-md-4 list-group">
        {items}
      </ul>
    );
  }
}
