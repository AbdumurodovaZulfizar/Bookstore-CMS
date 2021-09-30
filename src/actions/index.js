const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

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

export const removebook = (id) => ({
  type: REMOVE_BOOK,
  payload: { id },
});
