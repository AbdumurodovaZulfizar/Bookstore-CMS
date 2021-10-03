import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleRemoveBook, changeFilter } from '../actions/index';
import BookConatiner from '../components/Book';
import FilterCategory from '../components/FilterCategory';

const BooksList = ({
  books, handleRemoveBook, filter, changeFilter,
}) => (
  <div>
    <FilterCategory filter={filter} handleFilter={changeFilter} />
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
            handleRemoveBook={handleRemoveBook}
          />
        ))
        }
      </tbody>
    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  handleRemoveBook: PropTypes.func,
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
};

BooksList.defaultProps = {
  books: [],
  handleRemoveBook: null,
  filter: 'All',
  changeFilter: null,
};

const getBooks = (books, filter) => {
  if (filter === 'All') {
    return books;
  }
  return books.filter((book) => book.category === filter);
};

const mapStateToProps = (state) => ({
  books: getBooks(state.books, state.filter),
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  handleRemoveBook: (id) => dispatch(handleRemoveBook(id)),
  changeFilter: (category) => dispatch(changeFilter(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
