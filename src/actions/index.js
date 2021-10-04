const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const defaultBookData = {
  title: '',
  category: '',
};

export const createbook = (bookData) => {
  const id = Math.ceil(Date.now() * Math.random()).toString();
  const book = {
    id,
    ...defaultBookData,
    ...bookData,
  };
  return {
    type: CREATE_BOOK,
    payload: { book },
  };
};

export const handleRemoveBook = (id) => ({
  type: REMOVE_BOOK,
  payload: { id },
});

export const changeFilter = (value) => ({
  type: CHANGE_FILTER,
  value,
});
