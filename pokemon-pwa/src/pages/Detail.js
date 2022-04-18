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
  // console.log(pokemon);

  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  return (
    <>
      <AddModal setShow={setShow} show={show} pokemon={pokemon} />
      <div className='container m-3 mx-auto'>
        {vw > 412 ? (
          <div className='d-flex justify-content-between'>
            <Link to='/'>
              <i class='fa-solid fa-arrow-left-long'></i> Stock Pokemon
            </Link>
            <button onClick={handleShow} className='btn btn-outline-primary'>
              Update Stock
            </button>
          </div>
        ) : (
          <div className='d-flex flex-column text-center'>
            <Link to='/'>
              <i class='fa-solid fa-arrow-left-long'></i> Stock Pokemon
            </Link>
            <button
              onClick={handleShow}
              className='btn btn-outline-primary mt-3 mx-auto w-50'
            >
              Update Stock
            </button>
          </div>
        )}

        <h1 className='mt-4'>{pokemon.name}</h1>
        <p className='mt-4'>Sisa Stock</p>
        <h2>{pokemon.stock} pcs</h2>
        <h3 className='mt-4'>Riwayat Stock</h3>
        <p>Satuan dalam pcs</p>
        {vw > 412 ? (
          <table className='table mt-4'>
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
                    <td style={{ color: "#006A7A" }}>{el.activity}</td>
                    <td>{`"${el.notes}"`}</td>
                    <td
                      style={
                        +el.jumlah > 0 ? { color: "green" } : { color: "red" }
                      }
                    >
                      {+el.jumlah > 0 ? `+${el.jumlah}` : `${el.jumlah}`}
                    </td>
                    <td>{el.stockHistory}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <table className='table mt-4'>
            {pokemon.histories.map((el) => {
              return (
                <>
                  <thead>
                    <tr>
                      <th scope='col'>
                        {el.time.toLocaleString().split(",")[0]}
                      </th>
                      <th scope='col'>Jumlah</th>
                      <th scope='col'>Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={el.id}>
                      <td>
                        <p>{el.time.toLocaleString().split(",")[1]}</p>
                        <p>{el.activity}</p>
                        <p>{el.notes}</p>
                      </td>
                      <td
                        style={
                          +el.jumlah > 0 ? { color: "green" } : { color: "red" }
                        }
                      >
                        {+el.jumlah > 0 ? `+${el.jumlah}` : `${el.jumlah}`}
                      </td>
                      <td>{el.stockHistory}</td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
        )}
      </div>
    </>
  );
}

export default Detail;
