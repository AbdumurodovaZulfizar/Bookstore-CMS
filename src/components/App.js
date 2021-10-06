import React from 'react';
import BookListContainer from '../containers/BooksList';
import BookFormContainer from '../containers/BooksForm';

const App = () => (
  <div>
    <BookListContainer />
    <hr />
    <BookFormContainer />
  </div>
);

export default App;
