import { useSelector } from "react-redux";
import Pokemon from "../components/Pokemon";

function Stock() {
  const { pokemons } = useSelector((state) => state.pokemonReducer);

  return (
    <div className='container'>
      <h1>Stock Pokemon</h1>
      <form class='d-flex'>
        <input
          class='form-control me-2 w-25'
          type='search'
          placeholder='Search'
          aria-label='Search'
        />
        <button class='btn btn-outline-success' type='submit'>
          Search
        </button>
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
