import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleRemoveBook } from '../actions/index';

const Book = ({
  id, title, category, handleRemoveBook,
}) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td><button onClick={() => handleRemoveBook(id)} type="button">Remove</button></td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  handleRemoveBook: PropTypes.func,
};

Book.defaultProps = {
  id: null,
  title: '',
  category: '',
  handleRemoveBook: null,
};

export default connect(null, { handleRemoveBook })(Book);
