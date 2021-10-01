import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createbook } from '../actions';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  submitForm(e) {
    e.preventDefault();
    const { createbook } = this.props;
    const { title, category } = this.state;
    if (!(title && category)) return;

    if (createbook) {
      createbook(this.state);
    }

    this.setState(
      {
        title: '',
        category: '',
      },
    );
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { title, category } = this.state;

    return (
      <div>
        <form onSubmit={this.submitForm} className="col-9 mx-auto d-flex">
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Type Book Name..."
            name="title"
            value={title}
            maxLength={50}
            minLength={5}
            className="col-6 m-2"
          />
          <select className="col-3 m-2" aria-label="Default select example" name="category" value={category} onChange={this.handleChange}>
            <option value="disabled" key="0">Select</option>
            {categories.map((types) => (
              <option value={types} key={types}>
                {types}
              </option>
            ))}
          </select>
          <button type="submit" className="btn btn-primary m-2">Submit</button>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createbook: PropTypes.func,
};

BooksForm.defaultProps = {
  createbook: null,
};

export default connect(null, { createbook })(BooksForm);
