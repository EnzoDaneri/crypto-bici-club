import { useState } from 'react';
import '../../App.css';

function Login() {
  return (
    <div className='main-container'>
      <div className='login-container'>
        <h1>Iniciar sesión</h1>
        <form action=''>
          <label>Continuar con:</label>
          <button className='btn-submit-login'>Facebook</button>
          <button className='btn-submit-login'>Google</button>
        </form>
        <div>
          <span>Crear cuenta</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
