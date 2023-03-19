import { INCREMENT, DECREMENT } from "../types/counter";

export const increment = () => {
  return {
    type: INCREMENT,
    payload: {
      foo: "bar",
    },
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
    payload: {
      foo: "bar",
    },
  };
};
