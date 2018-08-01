import React, {Component} from 'react';
import './delivery-form.css';
import {reduxForm, Field} from 'redux-form';
import Input from './input';

export class DeliveryForm extends Component{
  render(){
    return (
      <div className="form-container">
        <h2>Report a problem with your delivery</h2>
        <form className="delivery-form">
          <div className="form-input">
            <Field id="tracking-number" name="tracking-number" label="Tracking Number" component={Input} element="input" type="text"></Field>
          </div>

          <div className="form-input">  
            <Field id="issue-description" name="tracking-number" label="What is your issue?" component={Input} element="select">
              <option value="not-delivered">My delivery hasn't arrived</option>
              <option value="wrong-item">The wrong item was delivered</option>
              <option value="missing-part">Part of my order was missing</option>
              <option value="damaged">Some of my order arrived damaged</option>
              <option value="other">Other (give details below)</option>
            </Field>
          </div>

          <div className="form-input">
            <Field id="details" name="details" label="Give more details (optional)" component={Input} element="textarea" type="text"></Field>
          </div>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'register'
})(DeliveryForm);