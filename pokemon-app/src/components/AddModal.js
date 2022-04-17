import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AddModal({ show, setShow }) {
  const handleClose = () => setShow(false);
  const navigate = useNavigate();

  function saveHandler() {
    navigate("/confirmation", { state: "Hello" });
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
                  <input className='form-control w-25' type='number' />
                  <p>=</p>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Lusin</td>
                <td className='d-flex flex-row justify-content-between'>
                  <p>12 x </p>
                  <input className='form-control w-25' type='number' />
                  <p>=</p>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className='d-flex flex-row'>
            <p>
              <strong>Total Stock</strong> (dalam pcs)
            </p>
            <p></p>
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
