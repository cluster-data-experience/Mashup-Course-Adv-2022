import React, { useEffect, useRef } from 'react';
import { useNebula } from '../../Context/Nebula';

const PlainListbox = ({ fieldName, height }) => {
  const ref = useRef();
  const { nebula } = useNebula();

  useEffect(() => {
    if(nebula) {
      const renderListbox = async () => {
        const options = {
          title: fieldName
        };
        const field = await nebula.field(fieldName);
        field.mount(ref.current, options);
      }
      debugger;
      renderListbox();
    }
  }, [nebula, fieldName]);

  return (
    <div style={{ marginTop: '10px' }}>
      <div
        className="filter-dropdown opened"
        style={{ height: height || '250px', position: 'initial', border: 0, boxShadow: 'none' }}
      >
        <div 
          ref={ref}
          className="listbox"
          style={{ height: height || '250px' }}
        />
      </div>
    </div>
  );
};

export default PlainListbox;