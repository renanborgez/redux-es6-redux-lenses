import * as R from 'ramda';

import { ActionsTypes } from '../actions/CounterActions';

const defaultTo = value => R.lens(a => a === undefined ? value : a, R.identity);

const resultLens = R.compose(
  R.lensProp('result'),
  defaultTo(0),
);

const lastCommandLens = R.compose(
  R.lensProp('lastCommand'),
  defaultTo('unknown'),
);

export default function(state = {}, action) {
  const {type} = action;

  switch(type) {
    case ActionsTypes.ADD:
      return R.compose(
        R.over(resultLens, R.add(1)),
        R.over(lastCommandLens, R.always('added')),
      )(state);
    case ActionsTypes.SUBTRACT:
      return R.compose(
        R.over(resultLens, R.flip(R.subtract)(1)),
        R.over(lastCommandLens, R.always('subtracted')),
      )(state);
    default: return state;
  }
};