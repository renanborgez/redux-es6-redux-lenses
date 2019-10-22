import * as L from 'partial.lenses';

import { ActionsTypes as CounterActionTypes } from '../actions/CounterActions';

const resultLens = L.compose(
  L.prop('result'),
  L.valueOr(0),
);

const lastCommandLens = L.compose(
  L.prop('lastCommand'),
  L.valueOr('unknown'),
);

const calculateResult = (state, action) => {
  switch (action.type) {
    case CounterActionTypes.ADD:
      return L.get(resultLens, state) + 1;
    case CounterActionTypes.SUBTRACT:
      return L.get(resultLens, state) - 1;
    default:
      return L.get(resultLens, state);
  }
};

const regiterLastCommand = (state, action) => {
  switch (action.type) {
    case CounterActionTypes.ADD:
      return 'added'
    case CounterActionTypes.SUBTRACT:
      return 'subtracted';
    default:
      return L.get(lastCommandLens, state);
  }
};

export default function(state = {}, action) {
  return {
    result: calculateResult(state, action),
    lastCommand: regiterLastCommand(state, action),
  };
};