import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions/index';

class ListPosts extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">Add a Post</Link>
        </div>
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
      <li key={post.id} className="list-group-item"><Link to={`/posts/${post.id}`}>{ post.title }</Link></li>
    );
  }
}

function mapStateToProps( { posts } ) {
  return { posts };
}

// Remember {fetchPosts} is equivalent to {fetchPosts:fetchPosts}
// and perfect fine to pass in object rather than function that resolves to object
export default connect( mapStateToProps, { fetchPosts } )( ListPosts );
