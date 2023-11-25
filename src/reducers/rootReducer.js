import { combineReducers } from "redux";
// import { uiReducer } from "./ui";
// import { pokemonsReducer } from "./pokemons";

import dataReducer from "../slices/dataSlice";

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
