import React from 'react';

import './styles.css'

const RightFilters = () => {
    const rightFiltersOpened = false;

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
          onClick={() => {}}
        >
          <i className="material-icons">&#xE5CD;</i>
        </button>
      </aside>
    </div>
  );
};

export default RightFilters;