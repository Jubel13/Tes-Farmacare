import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddModal({ show, setShow, pokemon }) {
  const navigate = useNavigate();
  const [one, setOne] = useState(0);
  const [lusin, setLusin] = useState(0);

  function changeOne(e) {
    let value = e.target.value;
    setOne(value);
  }

  function changeLusin(e) {
    let value = e.target.value;
    setLusin(value);
  }

  const handleClose = () => {
    setOne(0);
    setLusin(0);
    setShow(false);
  };

  let totalStock = +one + +lusin * 12;

  function saveHandler() {
    navigate("/confirmation", {
      state: { one, lusin, pokemon },
    });
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className='d-flex flex-column'>
          <Modal.Title>Update Stock</Modal.Title>
          <p>Masukkan jumlah stock yang tersedia di rak ini</p>
        </Modal.Header>
        <Modal.Body>
          <table class='table'>
            <thead>
              <tr>
                <th scope='col'>Kemasan</th>
                <th scope='col'>Jumlah</th>
                <th scope='col'>Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pcs</td>
                <td className='d-flex flex-row justify-content-between'>
                  <p className=''>1 x</p>
                  <input
                    value={one}
                    onChange={changeOne}
                    className='form-control w-25'
                    type='number'
                  />
                  <p>=</p>
                </td>
                <td>{one}</td>
              </tr>
              <tr>
                <td>Lusin</td>
                <td className='d-flex flex-row justify-content-between'>
                  <p>12 x </p>
                  <input
                    value={lusin}
                    onChange={changeLusin}
                    className='form-control w-25'
                    type='number'
                  />
                  <p>=</p>
                </td>
                <td>{lusin * 12}</td>
              </tr>
            </tbody>
          </table>
          <div className='d-flex flex-row justify-content-between'>
            <p>
              <strong>Total Stock</strong> (dalam pcs)
            </p>
            <p className='me-4'>{pokemon.stock + totalStock}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={saveHandler}>
            Simpan
          </Button>
          <Button variant='secondary' onClick={handleClose}>
            Batal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
