import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function AddTravelPage() {
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const selectOptionTravel = () => {
    setIsOptionSelected(true);
  };

  return (
    <div className='main-container'>
      <div className='add-travel-container-primary'>
        <h1 className='add-travel-title'>Agregar viaje</h1>

        <div className='add-travel-container-secondary'>
          <button
            className='btn-add-travel'
            onClick={(e) => selectOptionTravel()}
            name='sponsor'
          >
            A un sponsor
          </button>
          <button
            className='btn-add-travel'
            onClick={(e) => selectOptionTravel()}
            name='other'
          >
            Otro
          </button>
        </div>
        <Link to={'../addLinkTravel'}>
          {' '}
          <button
            className={
              isOptionSelected ? 'btn-add-travel' : 'btn-add-travel-disabled'
            }
          >
            Agregar viaje
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AddTravelPage;
