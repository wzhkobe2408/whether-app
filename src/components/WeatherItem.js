import React, { Component } from 'react';
import _ from 'lodash';
import { Sparklines,SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';
class WeatherItem extends Component {

  avg(data){
    return _.round(_.sum(data)/data.length);
  }

  render() {
    const temps = this.props.data.map(weather => weather.main.temp);
    const humidities = this.props.data.map(weather => weather.main.humidity);
    const pressures = this.props.data.map(weather => weather.main.pressure);
    return (
      <tr >
        <td>{this.props.city.name}</td>

        <td>
          <Sparklines width={100} height={40}  data={temps} >
            <SparklinesLine color='orange' />
            <SparklinesReferenceLine type='avg' />
          </Sparklines>
          <div>Average:{this.avg(temps)}</div>
        </td>

        <td>
          <Sparklines width={100} height={40}  data={humidities}>
            <SparklinesLine color='yellow' />
            <SparklinesReferenceLine type='avg' />
          </Sparklines>
          <div>Average:{this.avg(humidities)}</div>
        </td>

        <td>
          <Sparklines  width={100} height={40}  data={pressures}>
            <SparklinesLine color='blue' />
            <SparklinesReferenceLine type='avg' />
          </Sparklines>
          <div>Average:{this.avg(pressures)}</div>
        </td>
      </tr>
    );
  }
}

export default WeatherItem;
