import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import DeliveryForm from './components/delivery-form';
import registerServiceWorker from './registerServiceWorker';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <DeliveryForm /> 
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
