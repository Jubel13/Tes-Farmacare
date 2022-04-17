import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import AddModal from "../components/AddModal";

function Detail() {
  const { id } = useParams();
  const { pokemons } = useSelector((state) => state.pokemonReducer);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  let pokemon = pokemons.find((el) => el.id === +id);
  console.log(pokemon);

  return (
    <>
      <AddModal setShow={setShow} show={show} />
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <Link to='/'>Stock Pokemon</Link>
          <button onClick={handleShow} className='btn btn-outline-primary'>
            Update Stock
          </button>
        </div>
        <h1>{pokemon.name}</h1>
        <p>Sisa Stock</p>
        <h4>{pokemon.stock} pcs</h4>
        <h3>Riwayat Stock</h3>
        <p>Satuan dalam pcs</p>

        <table class='table'>
          <thead>
            <tr>
              <th scope='col'>Waktu</th>
              <th scope='col'>Kegiatan</th>
              <th scope='col'>Catatan</th>
              <th scope='col'>Jumlah</th>
              <th scope='col'>Stock</th>
            </tr>
          </thead>
          <tbody>
            {pokemon.histories.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.time.toLocaleString()}</td>
                  <td>{el.activity}</td>
                  <td>{el.notes}</td>
                  <td>{el.jumlah}</td>
                  <td>{pokemon.stock}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Detail;
