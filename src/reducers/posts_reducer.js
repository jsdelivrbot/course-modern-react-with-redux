import _ from 'lodash';
import { FETCH_POSTS } from '../actions/index';

export default function ( state = {}, action ) {
  switch ( action.type ) {
    case FETCH_POSTS:
      const posts = action.payload.data;
      return _.mapKeys( posts, 'id' );

    default:
      return state;
  }
}
