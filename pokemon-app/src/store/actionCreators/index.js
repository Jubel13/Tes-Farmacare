import { FETCH_POKEMONS } from "../actionTypes";
import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";

export function fetchPokemons() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get(baseUrl)
        .then((resp) => {
          let pokemons = [];

          resp.data.results.forEach((el) => {
            let tempObj = {
              id: +el.url
                .split("/")
                .filter((el) => el)
                .at(-1),
              name: el.name,
              stock: 10,
            };
            pokemons.push(tempObj);
          });
          dispatch(fetchPokemonsAction(pokemons));
          resolve(pokemons);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function fetchPokemonsAction(payload) {
  return {
    type: FETCH_POKEMONS,
    payload,
  };
}
