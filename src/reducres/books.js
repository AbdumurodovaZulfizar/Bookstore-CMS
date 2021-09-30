const defaultSate = [];

const bookReducer = (state = defaultSate, action) => {
  switch(action.type) {
    case "CREATE_BOOK":
      const { book } = action.payload;
      return [...state, book];
    case "REMOVE_BOOK":
      const { id } = action.payload;
      return state.filter((book) => book.id !== id)
    default:
      return state;
  }
};

export default bookReducer;
