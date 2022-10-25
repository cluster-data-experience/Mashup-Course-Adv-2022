import React from 'react';
import { useRightFilters } from '../../Context/RightFilters';

//components
import Listbox from '../Listbox';
import CurrentSelections from '../CurrentSelections';

import './styles.css'

const Navbar = () => {
  const { rightFiltersOpened, manageRightFilters } = useRightFilters();
  function logout() {
    const config = {
      host: 'dev.clusterdesign.io', // Use your own host
      prefix: '/'
    };
    fetch(`https://${config.host}${config.prefix}qps/user`, {
      method: 'DELETE',
    }).then(res => {
      console.log('res', res);
      window.location = "/";
    })
  }
  
  function toggleNavigationMenu() {
    const body = document.querySelector('body');
    body.classList.toggle('nav-toggle');
  }

  return (
    <nav className="navbar">
      <div className="brand-wrapper">
        <a href="#home" className="branding">
          Mashup Name
        </a>
        {/* LAST UPDATE */}
        <div className="update-time-container">
          <p>...</p>
        {/* END LAST UPDATE */}
        </div>
      </div>
      <button className="burger-menu" onClick={() => toggleNavigationMenu()}>
        <i className='material-icons'>&#xe5d2;</i>
      </button>
      <div className="qlik-topfilters">
        <Listbox fieldName="Customer" />
        <Listbox fieldName="City" />
        <Listbox fieldName="State" />
      </div>
      <div className="right-buttons">
        <button 
          className="btn btn-default more-filters"
          onClick={() => manageRightFilters(!rightFiltersOpened)}
        >
          More filters
        </button>
        <CurrentSelections />

        <button className="btn-icon logout-btn" onClick={() => logout()}>
          <i className='material-icons'>&#xe9ba;</i>
        </button>
      </div>
      <div className="nav-right-mobile">
        <button 
          className="icon-filter more-filters btn-icon"
          onClick={() => manageRightFilters(!rightFiltersOpened)}
        >
          <i className='material-icons'>&#xef4f;</i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;