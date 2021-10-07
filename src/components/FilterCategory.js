import React from 'react';
import PropTypes from 'prop-types';

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const FilterCategory = ({ filter, handleFilter }) => (
  <div className="category-wrapper">
    <select
      name="category"
      value={filter}
      onChange={(e) => handleFilter(e.target.value)}
      className="col-4 py-1"
    >
      {categories.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  </div>
);

FilterCategory.propTypes = {
  filter: PropTypes.string,
  handleFilter: PropTypes.func,
};

FilterCategory.defaultProps = {
  filter: 'All',
  handleFilter: null,
};

export default FilterCategory;
