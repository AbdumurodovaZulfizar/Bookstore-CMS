import React from 'react';
import PropTypes from 'prop-types';

export default class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };

    this.handleChange  = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }

  submitForm(e) {
    e.preventDefault();
    const { createbook } = this.props;
    const {title, category} = this.state;
    if (!(title && category)) return;

    if (createbook) {
      createbook(this.state)
    };

    this.setState = {
      title: '',
      category: '',
    }
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { title, category } = this.state;

    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Type Book Name..."
            name="title"
            value={title}
            maxLength={50}
            minLength={5}
          />
          <select class="form-select" aria-label="Default select example" name="category" value={category} onChange={this.handleChange}>
            {categories.map((types) => {
              <option value={types} key={types}>
                {types}
              </option>
            })}
          </select>
          <button type="button" class="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
};

BooksForm.propTypes = {
  createbook: PropTypes.func,
}

BooksForm.defaultProps = {
  createbook: null,
}
