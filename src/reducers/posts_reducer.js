import _ from 'lodash';
import { DELETE_POST, FETCH_POST, FETCH_POSTS } from '../actions/index';

export default function ( state = {}, action ) {
  switch ( action.type ) {
    case FETCH_POST:
      const post = action.payload.data;
      if ( post ) {
        return { ...state, [post.id]: post };
        // The following code matched the above line in functionality
        //const newState = { ...state };
        //newState[ post.id ] = post;
        //return newState;
      }
      else {
        return state;
      }
    case DELETE_POST:
      const postID = action.payload;
      // If the state has a key that matches postID then return object
      // omitting that key
      return _.omit( state, postID );

    case FETCH_POSTS:
      const posts = action.payload.data;
      return _.mapKeys( posts, 'id' );

    default:
      return state;
  }
}
