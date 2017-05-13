import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const BASE_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = 'realityforge-42';

function toQueryUrl( request_path ) {
  return `${BASE_URL}${request_path}?key=${API_KEY}`;
}

export function fetchPosts() {
  //Request is a promise that is processed by ReduxPromise middleware
  const request = axios.get( toQueryUrl( '/posts' ) );
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
