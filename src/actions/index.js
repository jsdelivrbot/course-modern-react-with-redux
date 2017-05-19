import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const SAVE_POST = 'SAVE_POST';

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

export function fetchPost(postID) {
  //Request is a promise that is processed by ReduxPromise middleware
  const request = axios.get( toQueryUrl( `/posts/${postID}` ) );
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function savePost( title, categories, content, callback ) {
  const request =
    axios.post( toQueryUrl( '/posts' ), { title: title, categories: categories, content: content } ).
          then( () => callback() );
  return {
    type: SAVE_POST,
    payload: request
  };
}
