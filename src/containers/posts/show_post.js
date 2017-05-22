import React, { Component } from 'react';
import { fetchPost } from '../../actions/index';

class ShowPost extends Component {
  componentDidMount() {
    // This prop is provided by react-router-dom and
    // is extracted from :id segment in router
    const postID = this.props.match.params.id;

    this.props.fetchPost( postID );
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}

export default connect( null, { fetchPost } )( ShowPost );
