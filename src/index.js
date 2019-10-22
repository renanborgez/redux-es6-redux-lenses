import { createStore } from 'redux';

import CounterReducer from './reducers/CounterReducer';
import CounterComponent from './component/CounterComponent';

const store = createStore(CounterReducer);

document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded');
  const counter = new CounterComponent(store);
  counter.render();
})