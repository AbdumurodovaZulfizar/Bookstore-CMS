import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleRemoveBook } from '../actions/index';
import BookConatiner from '../components/Book';

const BooksList = ({ books, removebook }) => (
  <table className="table col-9 mx-auto">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">Category</th>
        <th scope="col">Buttons</th>
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
          removebook={handleRemoveBook}
        />
      ))
      }
    </tbody>
  </table>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  removebook: PropTypes.func,
};

BooksList.defaultProps = {
  books: [],
  removebook: null,
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  handleRemoveBook: (id) => dispatch(handleRemoveBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
