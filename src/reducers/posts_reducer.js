import _ from 'lodash';
import { FETCH_POST, FETCH_POSTS } from '../actions/index';

export default function ( state = {}, action ) {
  switch ( action.type ) {
    case FETCH_POST:
      const post = action.payload.data;
      return { ...state, [post.id]: post };
      // The following code matched the above line in functionality
      //const newState = { ...state };
      //newState[ post.id ] = post;
      //return newState;
    case FETCH_POSTS:
      const posts = action.payload.data;
      return _.mapKeys( posts, 'id' );

    default:
      return state;
  }
}
