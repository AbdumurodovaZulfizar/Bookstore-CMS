import React from 'react';
import '../index.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header className="d-flex justify-content-between">
    <div className="d-flex">
        <Link to="/" className="logo">
        Bookstore CMS
        </Link>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <NavLink exact to="/" className="nav_link">
            BOOKS
          </NavLink>
          <NavLink exact to="/" className="nav_link">
          CATEGORIES
          </NavLink>
      </nav>
    </div>
    <div>
      <Link to="/" className="icon">
        <div className="icon-wrapper text-center">
          <i className="fas fa-user" />
        </div>
      </Link>
    </div>
  </header>
);

export default Header;
