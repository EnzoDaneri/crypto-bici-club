import { useState } from 'react';
import '../../App.css';

function SignUp() {
  return (
    <div className='main-container'>
      <div className='signUp-container'>
        <h1>Bienvenido a Bici Club!</h1>
        <h2>Crear cuenta</h2>
        <form action=''>
          <label>Registrarme con:</label>
          <button className='btn-submit-signup'>Facebook</button>
          <button className='btn-submit-signup'>Google</button>
        </form>
        <div>
          <span>Ya tengo cuenta</span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
