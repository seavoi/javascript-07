import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to='/red'>Red</NavLink></li>
      <li><NavLink to='/orange'>Orange</NavLink></li>
      <li><NavLink to='/yellow'>Yellow</NavLink></li>
      <li><NavLink to='/green'>Green</NavLink></li>
      <li><NavLink to='/blue'>Blue</NavLink></li>
      <li><NavLink to='/indigo'>Indigo</NavLink></li>
      <li><NavLink to='/violet'>Violet</NavLink></li>
    </ul>
  </nav>
);

export default Nav;