import { combineReducers } from "redux";

import counterReducer from "./counterReducer";
import contactReducer from "./contactReducer";

export default combineReducers({ counterReducer, contactReducer });
