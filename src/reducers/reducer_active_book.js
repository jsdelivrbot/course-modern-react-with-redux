// state is not application, but state that this reducer is responsible for
export default function ( state = null, action ) {
  switch ( action.type ) {
    case 'BOOK_SELECTED':
      return action.book;
  }

  //Default scenario if we do not care about action
  return state;
}
