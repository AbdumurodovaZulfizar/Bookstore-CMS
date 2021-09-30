import React from 'react';
import { connect } from 'react-redux';
import { removebook } from '../actions/index';
import BookConatiner from '../components/Book';
import PropTypes from 'prop-types';

const BooksList = ({ books, removebook }) => {
  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Category</th>
    </tr>
  </thead>
  <tbody>
    {
      books.map((book) => (
        <BookConatiner
          id={book.id}
          title={book.title}
          category={book.category}
          key={book.id}
          removebook={removebook}
        />
      )
      )
    }
  </tbody>
</table>
  )
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  removebook: PropTypes.func,
}

BooksList.defaultProps = {
  books: [],
  removebook: null,
}

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => dispatch(removebook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
