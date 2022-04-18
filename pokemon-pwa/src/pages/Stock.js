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
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  return (
    <div className={+vw > 412 ? "container w-50 mt-4" : "container mt-4"}>
      <h1>Stock Pokemon</h1>
      <form class='d-flex mt-4'>
        <input
          className={
            +vw > 412 ? "form-control me-2 w-50" : "form-control me-2 vw-100"
          }
          type='search'
          placeholder='Cari Pokemon'
          aria-label='Search'
          value={name}
          onChange={changeName}
        />
      </form>
      <table className='table mt-3'>
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
