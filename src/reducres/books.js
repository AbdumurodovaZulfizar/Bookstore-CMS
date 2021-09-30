const defaultSate = [];

const bookReducer = (state = defaultSate, action) => {
  if (action.type === 'CREATE_BOOK') {
    const { book } = action.payload;
    return [...state, book];
  }
  else if(action.type === 'REMOVE_BOOK') {
    const { id } = action.payload;
    return state.filter((book) => book.id !== id)
  } else {
    return state;
  }
};

export default bookReducer;
