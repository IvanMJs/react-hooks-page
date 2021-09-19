import { createStore, combineReducers } from "redux";
import reducer from "./amount/reducer";

import amountReducer from "./amount/reducer";

const reducers = combineReducers({
  amountReducer,
});

const store = createStore(reducers);

export default store;
