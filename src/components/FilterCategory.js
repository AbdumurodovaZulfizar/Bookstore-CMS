import React from 'react';
import PropTypes from 'prop-types';

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const FilterCategory = ({ filter, handleFilter }) => (
  <div className="row my-3">
    <select
      name="category"
      value={filter}
      onChange={(e) => handleFilter(e.target.value)}
      className="col-8 mx-auto py-1"
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
