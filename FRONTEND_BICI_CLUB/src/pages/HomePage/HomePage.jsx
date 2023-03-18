import { useState } from 'react';
import '../../App.css';
import avatar_image from '../../images/avatar.svg';

function HomePage() {
  return (
    <div className='main-container'>
      <div className='home-page-container'>
        <h1 className='home-title'>Home</h1>

        <div className='user-info-card'>
          <img
            src={avatar_image}
            alt='avatar image'
            className='user-profile-image'
          />
          <span> Agus </span>
          <span> 25 puntos </span>
          <span> Nivel 1 </span>
        </div>
        <button className='btn-add-travel'>Agregar viaje</button>
      </div>
    </div>
  );
}

export default HomePage;
