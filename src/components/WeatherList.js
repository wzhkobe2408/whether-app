import React, { Component } from 'react';
import WeatherItem from './WeatherItem';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render() {
    const weatherTable = this.props.weatherArray.map(weather => (
      <WeatherItem
        key = {weather.city.id}
        city = {weather.city}
        data = {weather.list}
      />
    ))
    return (
      <div>
        <table className="table table-hover mt-2">
          <thead>
            <tr>
            <th>City</th>
            <th>Temperature (℃)</th>
            <th>Humidity (hPa)</th>
            <th>Pressure (%)</th>
            </tr>
          </thead>
          <tbody>
            {weatherTable}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weatherArray:state.weather
  }
}

export default connect(mapStateToProps)(WeatherList);
