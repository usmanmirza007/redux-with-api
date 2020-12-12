import {INCREMENT, DECREMENT} from './../actions/ActionType';

export const add = () => ({
  type: INCREMENT,
});

export const sub = () => ({
  type: DECREMENT,
});
