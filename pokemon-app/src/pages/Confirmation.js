function Confirmation() {
  return (
    <div className='container'>
      <h1>Konfirmasi update Stock</h1>
      <p>Selisih</p>
      <h1>+533pcs</h1>
      <div className='d-flex flex-row'>
        <div>
          <p>Di sistem</p>
          <h5>10 pcs</h5>
        </div>
        <p>
          <i class='fa-solid fa-arrow-right'></i>
        </p>
        <div>
          <p>Hasil Update Stock</p>
          <h5>543 pcs</h5>
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
            <td>detail jumlah</td>
            <td>
              <p>543 pcs</p>
              <i class='fa-solid fa-pencil'></i>
            </td>
          </tr>
          <tr>
            <td colSpan='2'>Total hasil stock opname</td>
            <td>543 pcs</td>
          </tr>
        </tbody>
      </table>
      <h3>Catatan</h3>
      <div class='form-floating'>
        <textarea
          class='form-control'
          placeholder='Contoh: Stock awal'
          id='floatingTextarea2'
        ></textarea>
      </div>
      <div className='d-flex flex-row justify-content-end'>
        <button className='btn btn-success'>Simpan</button>
        <button className='btn btn-outline-success'>Batal</button>
      </div>
    </div>
  );
}

export default Confirmation;
