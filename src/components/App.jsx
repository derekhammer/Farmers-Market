import React from 'react';
import Header from './Header';
import Season from './Season';
import Location from './Location';
import Fruit from './Fruit';
import Vegetable from './Vegetable';
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import availableProduce from '../database';
import marketSchedule from '../schedule';
//import PropTypes from 'prop-types';

class App extends React.Component {
  constructor() {
    super();
    this.state = { month: new Date(Date.now()).getMonth()+1, day: new Date(Date.now()).getDay() };
    this.handleSelect = this.handleSelect.bind(this);
    this.monthString = {
      '1': 'January',
      '2': 'February',
      '3': 'March',
      '4': 'April',
      '5': 'May',
      '6': 'June',
      '7': 'July',
      '8': 'August',
      '9': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December',
    };
    this.monthImages = {
      '1': 'url("https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg?auto=compress&cs=tinysrgb&h=350")',
      '2': 'url("https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg?auto=compress&cs=tinysrgb&h=350")',
      '3': 'url("https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg?auto=compress&cs=tinysrgb&h=350")',
      '4': 'url("https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg?auto=compress&cs=tinysrgb&h=350")',
      '5': 'url("https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg?auto=compress&cs=tinysrgb&h=350")',
      '6': 'url("https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?cs=srgb&dl=bench-sea-landscape-462024.jpg&fm=jpg")',
      '7': 'url("https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?cs=srgb&dl=bench-sea-landscape-462024.jpg&fm=jpg")',
      '8': 'url("https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?cs=srgb&dl=bench-sea-landscape-462024.jpg&fm=jpg")',
      '9': 'url("https://images.unsplash.com/photo-1516700675895-b2e35cae333c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0c3eab16653cdb6b935dabd2647fe6d&w=1000&q=80")',
      '10': 'url("https://images.unsplash.com/photo-1516700675895-b2e35cae333c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0c3eab16653cdb6b935dabd2647fe6d&w=1000&q=80")',
      '11': 'url("https://images.unsplash.com/photo-1516700675895-b2e35cae333c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0c3eab16653cdb6b935dabd2647fe6d&w=1000&q=80")',
      '12': 'url("https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg?auto=compress&cs=tinysrgb&h=350")'
    }
  }

  handleSelect(event) {
    this.setState({month: event.target.value});
  }
  
  render() {
    return (
      <div>
        <style jsx>{`
          .border2 {
            border: 4px solid lightblue;
            border-radius: 15px;
          }
  
          .borderHeight {
            height: 49%;
          }
  
          .seasonalBackground {
            background: linear-gradient(rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.45)), ${this.monthImages[this.state.month]};
            background-size: contain;
          }
        `}</style>
        <Header/>
        <div className="text-center mb-4">
          <select value={this.state.month} onChange={this.handleSelect}>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
        <div className="container">
          <div className="row d-flex flex-row justify-content-center">
            <div className="col-md-5">
              <div className="border2 pt-3 pl-3 borderHeight">
                <Location day={marketSchedule[this.state.day]}/>
              </div>
              <div className="border2 pt-3 pl-3 borderHeight mt-3 seasonalBackground">
                <Season monthString={this.monthString[this.state.month.toString()]}/>
              </div>
            </div>
            <div className="col-md-5 border2 pt-3">
              <Fruit month={this.state.month} list={availableProduce[this.state.month-1].selectionFruit}/>
              <Vegetable monthString={this.monthString[this.state.month.toString()]} list={availableProduce[this.state.month-1].selectionVegetable}/>
            </div>
          </div>      
        </div>
  
      </div>
    );
  }
}

export default App;