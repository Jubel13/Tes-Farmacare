import { FETCH_POKEMONS } from "../actionTypes";

const initialState = {
  pokemons: [],
};

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMONS:
      return { ...state, pokemons: action.payload };
    default:
      return state;
  }
}

export default pokemonReducer;
