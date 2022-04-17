import { useSelector } from "react-redux";
import Pokemon from "../components/Pokemon";
import { useState } from "react";

function Stock() {
  const [name, setName] = useState("");
  let { pokemons } = useSelector((state) => state.pokemonReducer);

  function changeName(e) {
    let value = e.target.value;
    setName(value);
  }

  if (name) {
    pokemons = pokemons.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  return (
    <div className='container'>
      <h1>Stock Pokemon</h1>
      <form class='d-flex'>
        <input
          class='form-control me-2 w-25'
          type='search'
          placeholder='Search'
          aria-label='Search'
          value={name}
          onChange={changeName}
        />
      </form>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Nama</th>
            <th scope='col'>Stock</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon) => {
            return <Pokemon pokemon={pokemon} key={pokemon.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Stock;
