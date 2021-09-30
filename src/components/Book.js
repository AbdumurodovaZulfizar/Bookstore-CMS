import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Book  = ({ id, title, category }) => {
  return (
    <div>
      <h5>{id}</h5>
      <h3>{title}</h3>
      <h4>{category}</h4>
    </div>
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

export default Book;
