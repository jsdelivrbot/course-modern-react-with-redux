import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/index';

class ShowPost extends Component {
  componentDidMount() {
    // This prop is provided by react-router-dom and
    // is extracted from :id segment in router
    const postID = this.props.match.params.id;

    this.props.fetchPost( postID );
  }

  render() {
    const post = this.props.post;
    if ( !post ) {
      return <di>Loading....</di>;
    }
    return (
      <div>
        <Link to="/">Back to Index</Link>
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

export default connect( mapStateToProps, { fetchPost } )( ShowPost );
