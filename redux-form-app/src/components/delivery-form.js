import React, {Component} from 'react';
import './delivery-form.css';
import {reduxForm, Field} from 'redux-form';

export default class DeliveryForm extends Component{

  render(){
    return (
      <div class="form-container">
        <h2>Report a problem with your delivery</h2>
        <form class="delivery-form">
          <div class="form-input">
            <label for="tracking-number">Tracking Number</label>
            <input id="tracking-number" name="tracking-number"></input>
          </div>

          <div class="form-input">  
            <label for="issue-description">What is your issue?</label>
            <select id="issue-description" name="tracking-number">
              <option value="not-delivered">My delivery hasn't arrived</option>
              <option value="wrong-item">The wrong item was delivered</option>
              <option value="missing-part">Part of my order was missing</option>
              <option value="damaged">Some of my order arrived damaged</option>
              <option value="other">Other (give details below)</option>
            </select>
          </div>

          <div class="form-input">
            <label for="details">Give more details (optional)</label>
            <textarea id="details" name="details"></textarea>
          </div>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}