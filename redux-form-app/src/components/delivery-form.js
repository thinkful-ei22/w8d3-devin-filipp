import React, {Component} from 'react';
import './delivery-form.css';
import {reduxForm, Field} from 'redux-form';

export class DeliveryForm extends Component{
  render(){
    return (
      <div className="form-container">
        <h2>Report a problem with your delivery</h2>
        <form className="delivery-form">
          <div className="form-input">
            <label htmlFor="tracking-number">Tracking Number</label>
            <Field id="tracking-number" name="tracking-number"></Field>
          </div>

          <div className="form-input">  
            <label htmlFor="issue-description">What is your issue?</label>
            <Field id="issue-description" name="tracking-number">
              <option value="not-delivered">My delivery hasn't arrived</option>
              <option value="wrong-item">The wrong item was delivered</option>
              <option value="missing-part">Part of my order was missing</option>
              <option value="damaged">Some of my order arrived damaged</option>
              <option value="other">Other (give details below)</option>
            </Field>
          </div>

          <div className="form-input">
            <label htmlFor="details">Give more details (optional)</label>
            <Field id="details" name="details"></Field>
          </div>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'register'
})(DeliveryForm)