import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {

	searchURL = e => {
		this.props.onClick(e.target.innerText);
		this.props.istrue(true);
	}

 	render() {
    return (
    	<nav className="main-nav">
		    <ul>
		      <li><NavLink to='/red' onClick={this.searchURL}>Red</NavLink></li>
		      <li><NavLink to='/orange' onClick={this.searchURL}>Orange</NavLink></li>
		      <li><NavLink to='/yellow' onClick={this.searchURL}>Yellow</NavLink></li>
		      <li><NavLink to='/green' onClick={this.searchURL}>Green</NavLink></li>
		      <li><NavLink to='/blue' onClick={this.searchURL}>Blue</NavLink></li>
		      <li><NavLink to='/indigo' onClick={this.searchURL}>Indigo</NavLink></li>
		      <li><NavLink to='/violet' onClick={this.searchURL}>Violet</NavLink></li>
		    </ul>
		  </nav>
  	);
  }
}