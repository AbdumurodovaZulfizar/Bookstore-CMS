const defaultSate = [];

const bookReducer = (state = defaultSate, action) => {
  let result;
  if (action.type === 'CREATE_BOOK') {
    const { book } = action.payload;
    result = [...state, book];
  } else if (action.type === 'REMOVE_BOOK') {
    const { id } = action.payload;
    result = state.filter((book) => book.id !== id);
  } else {
    result = state;
  }
  return result;
};

export default bookReducer;
