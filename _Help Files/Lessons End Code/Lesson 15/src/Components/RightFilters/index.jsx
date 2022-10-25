import React from 'react';
import { useRightFilters } from '../../Context/RightFilters';

//components

import PlainListbox from '../Listbox/PlainListbox';

import './styles.css'

const RightFilters = () => {
  const { rightFiltersOpened, manageRightFilters } = useRightFilters();

  return (
    <div>
      <aside className={rightFiltersOpened ? "navigation-right opened" : "navigation-right"}>
        {/* current selections component; */}
        <div className="qlik-all-filters app-filters-container">
          <PlainListbox fieldName="Customer" height="250px" />
          <PlainListbox fieldName="City" height="250px" />
        </div>
        <button 
          className="close-filters"
          onClick={() => manageRightFilters(false)}
        >
          <i className="material-icons">&#xE5CD;</i>
        </button>
      </aside>
    </div>
  );
};

export default RightFilters;