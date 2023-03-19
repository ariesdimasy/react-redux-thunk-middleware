import { FETCH_CONTACTS } from "../types/contact";

const initialState = {
  contacts: [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS:
      break;
    default:
      return initialState;
  }
};

export default contactReducer;
