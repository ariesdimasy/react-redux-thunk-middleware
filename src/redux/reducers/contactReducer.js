import { FETCH_CONTACTS, SET_PAGE } from "../types/contact";

const initialState = {
  contacts: [],
  search: "",
  page: 1,
  pages: [], //
};

const contactReducer = (state = initialState, action) => {
  console.log("action ==> ", action);
  switch (action.type) {
    case FETCH_CONTACTS:
      return {
        ...initialState,
        contacts: action.payload.contacts,
        pages: action.payload.pages,
        page: action.payload.pages,
      };
    case SET_PAGE:
      return {
        ...initialState,
        contacts: action.payload.contacts,
        page: action.payload.page,
        pages: action.payload.pages,
      };
    default:
      console.log("why ke default ?");
      return state;
  }
};

export default contactReducer;
