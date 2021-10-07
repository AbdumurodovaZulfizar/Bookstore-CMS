import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleRemoveBook } from '../actions/index';

const Book = ({
  id, title, category, handleRemoveBook,
}) => (
  <div className="single-book d-flex justify-content-between">
    <div>
      <h6 className="category">{category}</h6>
      <h4 className="title">{title}</h4>
      <h6><Link to="/">Suzanne Collins</Link></h6>
      <div className="d-flex extra-links">
        <h6><Link to="/">Comments</Link></h6>
        <div className="mini-line" />
        <h6><Link to="/" onClick={() => handleRemoveBook(id)}>Remove</Link></h6>
        <div className="mini-line" />
        <h6><Link to="/">Edit</Link></h6>
      </div>
    </div>
    <div className="d-flex">
      <div className="circle" />
      <div className="percent">
        <h3>64%</h3>
        <h6>Completed</h6>
      </div>
      <div className="line" />
      <div className="update-book">
        <h6 className="text-uppercase current">
          Current Chapter
        </h6>
        <h6>Chapter 17</h6>
        <button type="button" className="text-uppercase">Update progress</button>
      </div>
    </div>
  </div>
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
