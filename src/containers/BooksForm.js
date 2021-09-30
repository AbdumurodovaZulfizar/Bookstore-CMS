import React from 'react';

const BooksForm = () => {
  return (
    <form>
      <input />
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="Action">Action</option>
        <option value="Biography">Biography</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Kids">Kids</option>
        <option value="Learning">Learning</option>
        <option value="Sci-fi">Sci-Fi</option>
      </select>
      <button type="button" class="btn btn-primary">Submit</button>
    </form>
  )
}

export default BooksForm;
