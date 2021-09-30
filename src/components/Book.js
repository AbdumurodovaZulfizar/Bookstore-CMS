import React from 'react';
import PropTypes from 'prop-types';

const Book  = ({ id, title, category }) => {
  return (
    <div>
      <h5>{id}</h5>
      <h3>{title}</h3>
      <h4>{category}</h4>
    </div>
  )
}

export default Book;