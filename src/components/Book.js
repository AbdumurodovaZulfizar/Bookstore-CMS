import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removebook } from '../actions/index';

const Book = ({
  id, title, category, removebook,
}) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td><button onClick={() => removebook(id)} type="button">Remove</button></td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  removebook: PropTypes.func,
};

Book.defaultProps = {
  id: null,
  title: '',
  category: '',
  removebook: null,
};

export default connect(null, { removebook })(Book);
