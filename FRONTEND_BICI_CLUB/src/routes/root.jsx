import { useState, useEffect } from 'react';
import AddLinkTravel from '../components/AddLinkTravel/AddLinkTravel';
import SetProfilePicture from '../components/SetProfilePicture/SetProfilePicture';
import Login from '../components/Login/Login';
import SetUserName from '../components/SetUserName/SetUserName';
import SignUp from '../components/SignUp/SignUp';

import logo_bici_club from '../images/logo-bici-club.jpg';
import AddTravelPage from '../pages/AddTravelPage/AddTravelPage';
import HomePage from '../pages/HomePage/HomePage';
import store from '../redux/store/store';
import { Provider, useDispatch } from 'react-redux';
import { json } from 'react-router-dom';
import { addUser } from '../redux/store/userSlice';

function Root() {
  const [isMember, setIsmember] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1') //replace by the app endpoint
      .then((response) => response.json())
      .then((data) => dispatch(addUser(data)))
      .catch((error) => console.log('error: ', error));
  }, []);

  return (
    <Provider store={store}>
      <div className='navbar'>
        <img className='logo-image-navbar' src={logo_bici_club} />
      </div>

      {isMember ? (
        <Login />
      ) : (
        // TODO: ADD ROUTER
        <SignUp />
        // <SetUserName />
        // <SetProfilePicture />
        // <HomePage />
        // <AddTravelPage />
        // <AddLinkTravel />
      )}
      <div className='footer'></div>
    </Provider>
  );
}

export default Root;
