import { useState } from 'react';
import '../../App.css';

function SetProfilePicture() {
  return (
    <div className='main-container'>
      <div className='set-profile-picture-container'>
        <h1>Agregá una foto de perfil</h1>
        <form action=''>
          <input type='file' id='input-file-pic' />
          <label htmlFor='input-file-pic' className='set-profile-picture'>
            Subir archivo{' '}
          </label>
          <button className='btn-submit-signup'>Continuar</button>
        </form>
        <div></div>
      </div>
    </div>
  );
}

export default SetProfilePicture;
