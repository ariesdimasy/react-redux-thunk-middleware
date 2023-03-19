import axios from "axios";

export async function getContacts(q) {
  var queryParams = new URLSearchParams(q).toString();
  const res = await axios.get(`https://swapi.dev/api/people?${queryParams}`);
  return res;
}
