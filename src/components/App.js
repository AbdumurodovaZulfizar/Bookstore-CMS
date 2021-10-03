import React from 'react';
import BookListContainer from '../containers/BooksList';
import BookFormContainer from '../containers/BooksForm';

const App = () => (
  <div className="big-container col-10 mx-auto">
    <BookListContainer />
    <BookFormContainer />
  </div>
);

export default App;
