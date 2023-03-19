import { INCREMENT, DECREMENT } from "../types/counter";

const initialState = {
  number: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log(" INCREMENT from CounterReducer");
      return { number: state.number + 1 };
    case DECREMENT:
      console.log(" DECREMENT from CounterReducer");
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default CounterReducer;
