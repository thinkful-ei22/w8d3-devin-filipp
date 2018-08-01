import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DeliveryForm from './components/delivery-form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DeliveryForm />
      </div>
    );
  }
}

export default App;
