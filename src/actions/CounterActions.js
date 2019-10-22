export const ActionsTypes = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
};

export const add = () => ({
  type: ActionsTypes.ADD,
});

export const subtract = () => ({
  type: ActionsTypes.SUBTRACT,
});