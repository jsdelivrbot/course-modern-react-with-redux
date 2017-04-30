//selectBook is an action creator that creates an action
export function selectBook( book ) {
  return {
    type: 'BOOK_SELECTED',
    book: book
  };
}
