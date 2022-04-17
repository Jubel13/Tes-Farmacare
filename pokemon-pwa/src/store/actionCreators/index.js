import { FETCH_POKEMONS, UPDATE_POKEMON } from "../actionTypes";
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
            let id = +el.url
              .split("/")
              .filter((el) => el)
              .at(-1);
            let tempObj = {
              id: id,
              name: el.name.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()),
              histories: [
                {
                  id: id,
                  time: new Date(),
                  activity: "Stock Awal",
                  notes: "Stock Awal",
                  jumlah: 10,
                  stockHistory: 10,
                },
              ],
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

export function updatePokemon(payload) {
  return {
    type: UPDATE_POKEMON,
    payload,
  };
}

export function fetchPokemonsAction(payload) {
  return {
    type: FETCH_POKEMONS,
    payload,
  };
}
