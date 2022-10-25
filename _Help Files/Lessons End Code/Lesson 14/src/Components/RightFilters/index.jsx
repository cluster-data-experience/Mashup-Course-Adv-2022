import React from 'react';
import { useRightFilters } from '../../Context/RightFilters';

import './styles.css'

const RightFilters = () => {
  const { rightFiltersOpened, manageRightFilters } = useRightFilters();

  return (
    <div>
      <aside className={rightFiltersOpened ? "navigation-right opened" : "navigation-right"}>
        {/* current selections component; */}
        <div className="qlik-all-filters app-filters-container">
          {/* <PlainListBox fieldName="Customer" />
          <PlainListBox fieldName="City" /> */}
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