import { useState } from 'react';
import '../../App.css';

function SetUserName() {
  return (
    <div className='main-container'>
      <div className='set-name-container'>
        <h1>Elegí un nombre de usuario</h1>
        <form action=''>
          <label>Nombre:</label>
          <input type='text' />
          <button className='btn-submit-signup'>Continuar</button>
        </form>
        <div></div>
      </div>
    </div>
  );
}

export default SetUserName;
