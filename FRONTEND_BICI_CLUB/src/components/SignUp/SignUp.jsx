import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import biker_girl_image from '../../images/biker-girl.jpg';
import { facebookId } from '../../env/development-const';
import FacebookLogin from 'react-facebook-login';

function SignUp() {
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <div className='main-container'>
      <div className='signUp-container'>
        <h1>Bienvenido a Bici Club!</h1>
        <h2>Crear cuenta</h2>
        <form action=''>
          <label>Registrarme con:</label>
          <FacebookLogin
            className='btn-submit-login-facebook'
            appId={facebookId}
            autoLoad={false}
            fields='name,email,picture'
            // onClick={componentClicked}
            cssClass='btn-submit-login'
            callback={responseFacebook}
          />
          {/* <button className='btn-submit-signup'>Facebook</button> */}
          <button className='btn-submit-signup'>Google</button>
        </form>
        <div>
          <Link to={'../login'}>
            {' '}
            <span>Ya tengo cuenta</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
