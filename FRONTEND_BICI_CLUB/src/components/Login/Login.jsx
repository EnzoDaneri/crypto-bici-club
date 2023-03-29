import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../../App.css';

function Login() {
  const login = () => {};
  return (
    <div className='main-container'>
      <div className='login-container'>
        <h1>Iniciar sesión</h1>
        <form action=''>
          <label>Continuar con:</label>
          <button className='btn-submit-login' onClick={login}>
            Facebook
          </button>
          <button className='btn-submit-login'>Google</button>
        </form>
        <div>
          <Link to={'../signup'}>
            <span>Crear cuenta</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
