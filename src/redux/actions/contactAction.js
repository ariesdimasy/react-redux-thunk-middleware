import { FETCH_CONTACTS, SET_PAGE, SET_SEARCH } from "../types/contact";
import { getContacts } from "../../api/contactApi";

export const fetch_contacts = () => {
  return (dispatch, getState) => {
    const query = {
      search: getState().contactReducer.search,
      page: getState().contactReducer.page,
    };

    getContacts(query)
      .then((res) => {
        console.log("res ====> ", res);
        dispatch({
          type: FETCH_CONTACTS,
          payload: {
            contacts: res.data.results,
            page: 1,
            pages: Array.from(
              { length: Math.ceil(res.data.count / 10) },
              (_, i) => i + 1
            ),
          },
        });
      })
      .catch((err) => {
        dispatch(console.log("err getContacts => ", err));
      });
  };
};

export const set_page = (page) => {
  return (dispatch, getState) => {
    const query = {
      search: getState().contactReducer.search,
      page: page,
    };

    getContacts(query)
      .then((res) => {
        dispatch({
          type: SET_PAGE,
          payload: {
            contacts: res.data.results,
            pages: Array.from(
              { length: Math.ceil(res.data.count / 10) },
              (_, i) => i + 1
            ),
            page: page,
          },
        });
      })
      .catch((err) => {
        dispatch(console.log("err getContacts => ", err));
      });
  };
};

export const set_search = () => {
  return {
    type: SET_SEARCH,
  };
};
