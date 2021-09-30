import React from 'react';
import BookListContainer from '../containers/BooksList';
import BookFormContainer from '../containers/BooksForm';

const App = () => {
  return(
    <div>
      <BookListContainer />
      <BookFormContainer />
    </div>
  )
}

export default App;
