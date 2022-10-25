import React, { useRef, useEffect} from 'react';
import { useNebula } from '../../Context/NebulaContext';

import './styles.css';

const NativeObject = ({id, height}) => {
  const { nebula } = useNebula();
  const ref = useRef();

  useEffect(() => {
    if(nebula) {
      nebula.render({
        element: ref.current,
        id: id
      })
    }
  }, [nebula, id]);

  return (
    <div
      className='native-object'
      ref={ref}
      style={{ height: height || "15px"}}
    ></div>
  );
};

export default NativeObject;