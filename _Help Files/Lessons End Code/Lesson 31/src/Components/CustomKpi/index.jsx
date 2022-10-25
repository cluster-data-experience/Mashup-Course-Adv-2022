import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNebula } from '../../Context/Nebula';

//components
import Loader from '../Loader';

import './styles.css';

const CustomKpi = ({id}) => {
	const { app } = useNebula();
	const [data, setData] = useState({});
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

				//watcher
				obj.on("changed", async () => {
					const layout = await obj.getLayout();
					const {qHyperCube} = layout;
					const title = qHyperCube.qMeasureInfo[0].qFallbackTitle;
					const valueObject = qHyperCube.qDataPages[0].qMatrix[0][0];
					setData({
						title,
						formattedValue: valueObject.qText,
						value: valueObject.qNum
					})
				})
			})
		}
	}, [app, id])

	return (
		<div className='kpi-container'>
			{loading ? 
				<Loader />
				: (
					<>
						<span className='kpi-title'>{data.title}</span>
						<span className='kpi-value'>{data.formattedValue}</span>
					</>
				)
			}
		</div>
	);
};

export default CustomKpi;