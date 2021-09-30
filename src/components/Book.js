import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removebook } from '../actions/index'

const Book  = ({ id, title, category, removebook }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button onClick={() => removebook(id)}>Remove</button></td>
    </tr>
  )
};

Book.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
};

Book.defaultProps = {
  id: null,
  title: '',
  category: '',
}

export default connect(null, { removebook })(Book);
