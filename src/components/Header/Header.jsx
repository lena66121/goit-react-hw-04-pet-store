import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <ul className="header">
    <li className="header__item">
      <NavLink to="/home" activeClassName="active">
        Home
      </NavLink>
    </li>
    <li className="header__item">
      <NavLink to="/pets" activeClassName="active">
        Pets
      </NavLink>
    </li>
    <li className="header__item">
      <NavLink to="/about" exact activeClassName="active">
        About
      </NavLink>
    </li>
  </ul>
);

export default Header;
