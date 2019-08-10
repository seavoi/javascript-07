import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* App Components */
import apiKey from '../config';
import Search from './Search';
import Nav from './Nav';
import Gallery from './Gallery';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [], 
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'rainbow') =>  { /* Sets first loaded results to be 'rainbow' */
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    // console.log(this.state.photos);
    return (
      <BrowserRouter>
        <div className="container">
          <Search onSearch={this.performSearch} />
          <Nav onClick={this.performSearch} />
          // Loading indicators
          {
            (this.state.loading)
            ? <p>Loading...</p>
            :
            <Switch>
              <Route exact path="/" render={props => <Gallery data={this.state.photos} {...props} />} />
              <Route path="/red" render={props => <Gallery data={this.state.photos} {...props} />} />
              <Route path="/orange" render={props => <Gallery data={this.state.photos} {...props} />} />
              <Route path="/yellow" render={props => <Gallery data={this.state.photos} {...props} />} />
              <Route path="/green" render={props => <Gallery data={this.state.photos} {...props} />} />
              <Route path="/blue" render={props => <Gallery data={this.state.photos} {...props} />} />
              <Route path="/indigo" render={props => <Gallery data={this.state.photos} {...props} />} />
              <Route path="/violet" render={props => <Gallery data={this.state.photos} {...props} />} />
            </Switch>
          }
        </div>
      </BrowserRouter>
    );
  }

}