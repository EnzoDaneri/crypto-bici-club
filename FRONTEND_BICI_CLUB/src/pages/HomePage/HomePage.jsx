import { useState } from 'react';
import '../../App.css';
import avatar_image from '../../images/avatar.svg';
import { useSelector } from 'react-redux';

function HomePage() {
  const user = useSelector((state) => state.user);
  console.log(user);
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
          <span> {user.name} </span>
          <span> {user.points} </span>
          <span> Level: {user.level} </span>
        </div>
        <button className='btn-add-travel'>Agregar viaje</button>
      </div>
    </div>
  );
}

export default HomePage;
