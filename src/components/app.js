import React, { Component } from 'react';
import SearchBar from './SearchBar';
import WeatherList from './WeatherList';

export default class App extends Component {
  render() {
    return (
      <div className='container mt-5'>
        <h1 className='text-center'>React Weather Searcher</h1>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
