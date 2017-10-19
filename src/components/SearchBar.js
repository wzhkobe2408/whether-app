import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        term:''
      }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.term);
    this.props.fetchWeather(this.state.term);
    this.setState({term:''});
  }

  render() {
    return (
      <form className='input-group' onSubmit = {(e) => this.handleSubmit(e)}>
            <input
              type='text'
              value={this.state.term}
              placeholder='Enter city name to get five-day weather forcast' className='form-control'
              onChange = {(e) => this.setState({term:e.target.value})}
            />
            <span className='input-group-btn'>
              <button
                type='submit' className='btn btn-primary'
              >Search</button>
            </span>
      </form>
    );
  }
}



export default connect(null,{ fetchWeather })(SearchBar);
