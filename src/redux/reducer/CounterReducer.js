import {INCREMENT, DECREMENT} from './../actions/ActionType';

const INITIAL_STATE = {
  counter: 0,
};

const countReducer = (state = INITIAL_STATE, action) => {
    console.log(action.type);
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default countReducer;
