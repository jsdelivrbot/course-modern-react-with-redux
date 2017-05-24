import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost, fetchPost } from '../../actions/index';

class ShowPost extends Component {
  componentDidMount() {
    // This prop is provided by react-router-dom and
    // is extracted from :id segment in router
    const postID = this.props.match.params.id;

    this.props.fetchPost( postID );
  }

  onDeleteClick() {
    const postID = this.props.match.params.id;
    this.props.deletePost( postID, () => this.props.history.push( '/' ) );
  }

  render() {
    const post = this.props.post;
    if ( !post ) {
      return <di>Loading....</di>;
    }
    return (
      <div>
        <Link to="/">Back to Index</Link>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind( this )}>Delete Post</button>
        <h3>{ post.title }</h3>
        <h6>Categories: { post.categories }</h6>
        <p>{ post.content }</p>
      </div>
    );
  }
}

/**
 * ownProps is the props that is being supplied to the component, ownProps === this.props inside the component
 */
function mapStateToProps( { posts }, ownProps ) {
  const postID = ownProps.match.params.id;
  return { post: posts[ postID ] };
}

export default connect( mapStateToProps, { fetchPost, deletePost } )( ShowPost );
