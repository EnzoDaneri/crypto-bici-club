import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function AddLinkTravel() {
  return (
    <div className='main-container'>
      <div className='add-link-travel-container'>
        <span>1- Sacate una foto en el negocio</span>
        <span>2- Compartila en Instagram</span>
        <span>1- Pegá el link de la publicación aquí abajo</span>

        <form action='' className='add-link-travel-form'>
          <label>Link:</label>
          <input type='url' required placeholder='https.//...' />
        </form>

        <button className='btn-add-travel'>Agregar viaje</button>
      </div>
    </div>
  );
}

export default AddLinkTravel;
