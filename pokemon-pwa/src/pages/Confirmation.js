import { useLocation, useNavigate } from "react-router-dom";
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

  return (
    <div className='container'>
      <AddModal setShow={setShow} show={show} pokemon={pokemon} />

      <h1>Konfirmasi update Stock</h1>
      <p>Selisih</p>
      <h1>{updateStock} pcs</h1>
      <div className='d-flex flex-row'>
        <div>
          <p>Di sistem</p>
          <h5>{pokemon.stock} pcs</h5>
        </div>
        <p>
          <i class='fa-solid fa-arrow-right'></i>
        </p>
        <div>
          <p>Hasil Update Stock</p>
          <h5>{+pokemon.stock + updateStock} pcs</h5>
        </div>
      </div>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Keterangan</th>
            <th scope='col'>Detail</th>
            <th scope='col'>Jumlah</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hasil Update Stock</td>
            <td>
              {one} pcs, {lusin} lusin(12s)
            </td>
            <td className='d-flex flex-row'>
              <p className='mx-2'>{+pokemon.stock + updateStock} pcs</p>
              <div onClick={handleShow}>
                <i class='fa-solid fa-pencil'></i>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan='2'>Total hasil stock opname</td>
            <td>{+pokemon.stock + updateStock} pcs</td>
          </tr>
        </tbody>
      </table>
      <h3>Catatan</h3>
      <div class='form-floating'>
        <textarea
          class='form-control'
          placeholder='Contoh: Stock awal'
          id='floatingTextarea2'
          value={notes}
          onChange={changeNotes}
        ></textarea>
      </div>
      <div className='d-flex flex-row justify-content-end'>
        <button onClick={saveUpdate} className='btn btn-success'>
          Simpan
        </button>
        <button onClick={cancelUpdate} className='btn btn-outline-success'>
          Batal
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
