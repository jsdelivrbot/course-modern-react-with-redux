import React, { Component } from 'react';
import { fetchPost } from '../../actions/index';

class ShowPost extends Component {
  render() {
    return (
      <h1>Hi</h1>
    );
  }
}

export default connect( null, { fetchPost } )( ShowPost );
