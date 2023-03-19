import axios from "axios";

export function getContacts(page) {
  return async (dispatch, getState) => {
    const res = await axios.get(`https://swapi.dev/api/people?page=${page}`);
    dispatch(res.data);
  };
}
