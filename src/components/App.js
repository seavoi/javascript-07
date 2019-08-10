import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import apiKey from '../config';

import Search from './Search';
import Nav from './Nav';
import Gallery from './Gallery';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=orange&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    console.log(this.state.photos);
    return (
      <BrowserRouter>
        <div className="container">
          <Search />
          <Nav />
          <Switch>
            <Route path="/red" render={props => <Gallery data={this.state.photos} {...props} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}