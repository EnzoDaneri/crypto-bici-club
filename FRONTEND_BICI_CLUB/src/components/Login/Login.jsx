import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import '../../App.css';
import { facebookId } from '../../env/development-const';

function Login() {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div className='main-container'>
      <div className='login-container'>
        <h1>Iniciar sesión</h1>
        <form action=''>
          <label>Continuar con:</label>
          <FacebookLogin
            className='btn-submit-login'
            appId={facebookId}
            autoLoad={false}
            fields='name,email,picture'
            // onClick={componentClicked}
            callback={responseFacebook}
          />
          {/* <button className='btn-submit-login'>Facebook</button> */}
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
