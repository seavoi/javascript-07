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
		      <li><NavLink to='/search/red' onClick={this.searchURL}>Red</NavLink></li>
		      <li><NavLink to='/search/orange' onClick={this.searchURL}>Orange</NavLink></li>
		      <li><NavLink to='/search/yellow' onClick={this.searchURL}>Yellow</NavLink></li>
		      <li><NavLink to='/search/green' onClick={this.searchURL}>Green</NavLink></li>
		      <li><NavLink to='/search/blue' onClick={this.searchURL}>Blue</NavLink></li>
		      <li><NavLink to='/search/indigo' onClick={this.searchURL}>Indigo</NavLink></li>
		      <li><NavLink to='/search/violet' onClick={this.searchURL}>Violet</NavLink></li>
		    </ul>
		  </nav>
  	);
  }
}