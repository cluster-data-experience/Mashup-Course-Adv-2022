import React, { useEffect, useRef, useState } from 'react';
import { useNebula } from '../../Context/Nebula';

import "./styles.css";

const Listbox = ({ fieldName, height }) => {
  const { nebula } = useNebula();
  const ref = useRef();
  const containerRef = useRef();
  const [filterOpened, setFilterOpened] = useState(false);

  useEffect(() => {
    if(nebula) {
      const renderListbox = async () => {
        const options = {
          title: fieldName
        };
        const field = await nebula.field(fieldName);
        field.mount(ref.current, options);
      }
      renderListbox();
    }
  }, [nebula, fieldName]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  function handleClickOutside(event) {
    if (containerRef && !containerRef.current.contains(event.target)) {
      setFilterOpened(false);
    }
  }

  return (
    <div style={{ position: 'relative' }} ref={containerRef}>
      <div
        className="btn btn-default qlik-button-filter"
        onClick={() => setFilterOpened(!filterOpened)}
      >
        {fieldName}
      </div>
      <div
        className={filterOpened ? "filter-dropdown opened" : "filter-dropdown"}
        style={{ height: height || '250px' }}
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

export default Listbox;