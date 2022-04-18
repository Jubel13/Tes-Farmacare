import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import AddModal from "../components/AddModal";
import { useDispatch } from "react-redux";
import { updatePokemon } from "../store/actionCreators";

function Confirmation() {
  let location = useLocation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [notes, setNotes] = useState("");
  const handleShow = () => setShow(true);
  let one = +location.state.one;
  let lusin = +location.state.lusin;
  let pokemon = location.state.pokemon;
  let updateStock = one + lusin * 12;

  function changeNotes(e) {
    let value = e.target.value;
    setNotes(value);
  }

  function saveUpdate() {
    let history = {
      time: new Date(),
      activity: "Update Stock",
      notes: notes,
      jumlah: updateStock,
      stockHistory: updateStock + pokemon.stock,
    };

    let payload = {
      history,
      id: pokemon.id,
      updateStock,
    };
    dispatch(updatePokemon(payload));
    navigate(`/pokemon/${pokemon.id}`);
  }

  function cancelUpdate() {
    navigate(`/pokemon/${pokemon.id}`);
  }

  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  return (
    <>
      {vw <= 412 && (
        <div className='text-center mt-2'>
          <Link
            to={`/pokemon/${pokemon.id}`}
            className='fs-5 text-decoration-none'
          >
            x {pokemon.name}
          </Link>
        </div>
      )}

      <div className='container m-3 mx-auto'>
        <AddModal setShow={setShow} show={show} pokemon={pokemon} />
        <h1>Konfirmasi update Stock</h1>
        <p className='mt-4'>Selisih</p>
        <h1>{updateStock > 0 ? `+${updateStock}` : updateStock} pcs</h1>
        <div
          className={
            vw > 412
              ? "d-flex flex-row w-50 justify-content-between align-items-center mt-4"
              : "d-flex flex-row w-75 justify-content-between align-items-center mt-4"
          }
        >
          <div>
            <p>Di sistem</p>
            <h5>{pokemon.stock} pcs</h5>
          </div>
          <p>
            <i class='fa-solid fa-arrow-right fa-lg'></i>
          </p>
          <div>
            <p>Hasil Update Stock</p>
            <h5>{+pokemon.stock + updateStock} pcs</h5>
          </div>
        </div>

        {vw > 412 ? (
          <table className='table mt-4'>
            <thead>
              <tr>
                <th scope='col'>Keterangan</th>
                <th scope='col'>Detail</th>
                <th scope='col' className='text-end'>
                  Jumlah
                </th>
                <th scope='col' className='col-2'></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hasil Update Stock</td>
                <td>
                  {one} pcs, {lusin} lusin(12s)
                </td>
                <td className='text-end'>
                  <p>{+pokemon.stock + updateStock} pcs</p>
                </td>
                <td>
                  <div onClick={handleShow}>
                    <i class='fa-solid fa-pencil'></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan='2'>Total hasil stock opname</td>
                <td className='text-end'>{+pokemon.stock + updateStock} pcs</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className='mt-4'>
            <h6>Detail stock opname</h6>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Keterangan</th>
                  <th scope='col' className='text-end'>
                    Jumlah
                  </th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p style={{ color: "green" }}>Hasil Update Stock</p>
                    <p>
                      {one} pcs, {lusin} lusin(12s)
                    </p>
                  </td>
                  <td className='text-end'>
                    <p>{+pokemon.stock + updateStock} pcs</p>
                  </td>
                  <td>
                    <div onClick={handleShow}>
                      <i class='fa-solid fa-pencil'></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Total hasil stock opname</td>
                  <td className='text-end'>
                    {+pokemon.stock + updateStock} pcs
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <h4 className='mt-4'>Catatan</h4>
        <textarea
          class='form-control'
          placeholder='Contoh: Stock awal'
          value={notes}
          onChange={changeNotes}
        ></textarea>
        <div className='d-flex flex-row justify-content-end mt-3'>
          <button onClick={saveUpdate} className='btn btn-success me-2'>
            Simpan
          </button>
          <button onClick={cancelUpdate} className='btn btn-outline-success'>
            Batal
          </button>
        </div>
      </div>
    </>
  );
}

export default Confirmation;
