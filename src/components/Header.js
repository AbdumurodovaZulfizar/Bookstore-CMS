import React from 'react';
import '../index.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header className="d-flex justify-content-between">
    <div className="d-flex">
    <Link to="/" className="">
      Bookstore CMS
    </Link>
    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <NavLink exact to="/" className="me-3 py-2 text-dark text-decoration-none font fs-5">
      BOOKS
      </NavLink>
      <NavLink exact to="/calculator" className="me-3 py-2 text-dark text-decoration-none font fs-5">
      CATEGORIES
      </NavLink>
    </nav>
    </div>
    <div>
    <Link to="/" className="">
      <span>
      <i class="fas fa-user"></i>
      </span>
    </Link>
    </div>
  </header>
);

export default Header;
