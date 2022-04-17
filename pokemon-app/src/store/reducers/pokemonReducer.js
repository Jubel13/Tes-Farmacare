import { FETCH_POKEMONS, UPDATE_POKEMON } from "../actionTypes";

const initialState = {
  pokemons: [],
};

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMONS:
      return { ...state, pokemons: action.payload };
    case UPDATE_POKEMON:
      let id = +action.payload.id;
      let history = action.payload.history;
      let updatedPokemon = state.pokemons.find((el) => el.id === id);
      var index = state.pokemons.indexOf(updatedPokemon);
      updatedPokemon.histories.unshift(history);
      updatedPokemon.stock = updatedPokemon.stock + +action.payload.updateStock;
      state.pokemons[index] = updatedPokemon;
      return { ...state };
    default:
      return state;
  }
}

export default pokemonReducer;
