import { useState } from 'react';
import './App.css';
import AddLinkTravel from './components/AddLinkTravel/AddLinkTravel';
import SetProfilePicture from './components/SetProfilePicture/SetProfilePicture';
import Login from './components/Login/Login';
import SetUserName from './components/SetUserName/SetUserName';
import SignUp from './components/SignUp/SignUp';

import logo_bici_club from './images/logo-bici-club.jpg';
import AddTravelPage from './pages/AddTravelPage/AddTravelPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  const [isMember, setIsmember] = useState(false);

  return (
    <>
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
    </>
  );
}

export default App;
