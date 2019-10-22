import { createStore } from 'redux';
import reduceReducers from 'reduce-reducers';

import CounterReducer from './reducers/CounterReducer';
import CounterComponent from './component/CounterComponent';

const loggerReducer = (state, action) => console.log(action.type) || state;

const store = createStore(reduceReducers(CounterReducer, loggerReducer));

document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded');
  const counter = new CounterComponent(store);
  counter.render();
})