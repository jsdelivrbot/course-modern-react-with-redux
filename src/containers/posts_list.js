import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsList extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h2>Blog Posts</h2>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }

  renderPosts() {
    if ( !this.props.posts ) {
      return <li>No posts yet...</li>;
    }
    return _.map( this.props.posts, post => this.renderPost( post ) );

  }

  renderPost( post ) {
    return (
      <li key={post.id} className="list-group-item">{ post.title }</li>
    );
  }
}

function mapStateToProps( { posts } ) {
  return { posts };
}

// Remember {fetchPosts} is equivalent to {fetchPosts:fetchPosts}
// and perfect fine to pass in object rather than function that resolves to object
export default connect( mapStateToProps, { fetchPosts } )( PostsList );
