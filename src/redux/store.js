import { createStore, combineReducers } from "redux";
import { cardReducer } from "./reducers/reducer";

const allReducers = combineReducers({ cardReducer });

export const store = createStore(allReducers);
