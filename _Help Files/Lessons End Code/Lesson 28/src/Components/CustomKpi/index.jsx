import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNebula } from '../../Context/Nebula';

import './styles.css';

const CustomKpi = ({id}) => {
  const { app } = useNebula();
  const [data, setData] = useState();
  const [ loading, setLoading ] = useState(true);

	useEffect(() => { 
		if(app){
			app.getObject(id).then( async (obj) => {
				const layout = await obj.getLayout();
				const {qHyperCube} = layout;
				const title = qHyperCube.qMeasureInfo[0].qFallbackTitle;
				const valueObject = qHyperCube.qDataPages[0].qMatrix[0][0];
				setData({
					title,
					formattedValue: valueObject.qText,
					value: valueObject.qNum
				})
				setLoading(false);
			})
		}
	}, [app, id])

  return (
    <div>
      
    </div>
  );
};

export default CustomKpi;