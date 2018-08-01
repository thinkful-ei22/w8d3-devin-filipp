import React, {Component} from 'react';
import './delivery-form.css';
import {reduxForm, Field} from 'redux-form';
import Input from './input';

import {onSubmit} from '../actions';

import {required, nonEmpty, exactIdLength, isNumber} from '../validators';

export class DeliveryForm extends Component{
  

  render(){
    let successMessage;
    let errorMessage;
    if(this.props.submitSucceeded){
      successMessage = (
        <div className="message message-success">
          Issue submitted successfully
        </div>
      );
    }
    if(this.props.error){
      console.log('error detected');
      errorMessage = (
        <div className="message message-error">
          {this.props.error}
        </div>
      );
    }
    
    return (
      <div className="form-container">
        <h2>Report a problem with your delivery</h2>
        <form className="delivery-form" onSubmit={
          this.props.handleSubmit(values=>
            this.props.dispatch(onSubmit(values)))
        }>
          {successMessage}
          {errorMessage}
          <Field 
            id="trackingNumber"
            name="trackingNumber" 
            label="Tracking Number" 
            component={Input} 
            element="input"
            type="text"
            validate={[required, nonEmpty, exactIdLength, isNumber]}
          ></Field>
        
          <Field id="issue"
            name="issue"
            label="What is your issue?"
            component={Input}
            element="select"
            validate={[required]}
          >
            <option>Select issue</option>
            <option value="not-delivered">My delivery hasn't arrived</option>
            <option value="wrong-item">The wrong item was delivered</option>
            <option value="missing-part">Part of my order was missing</option>
            <option value="damaged">Some of my order arrived damaged</option>
            <option value="other">Other (give details below)</option>
          </Field>
        
          <Field id="details" name="details" label="Give more details (optional)" component={Input} element="textarea" type="text"></Field>
          
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'register'
})(DeliveryForm);