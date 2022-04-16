import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import pokemonReducer from "./reducers/pokemonReducer";

const rootReducer = combineReducers({ pokemonReducer });

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
