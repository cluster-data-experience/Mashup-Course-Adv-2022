import React, { useState, useEffect, useRef } from 'react';
import { useNebula } from '../../Context/Nebula';

const CurrentSelections = ({mobile}) => {
    const {app} = useNebula();
    const containerRef = useRef();
    const [selections, setSelections] = useState([]);
    const [opened, setOpened] = useState(false);
    
    useEffect(() => {
		if(app) {
			app
			.createSessionObject({
				qInfo: {
					qId: "",
					qType: "ListObject",
				},
				qSelectionObjectDef: {}
			})
			.then( async (object) => {
				const layout = await object.getLayout();
				setSelections(layout.qSelectionObject.qSelections);
				object.on("changed", async () => {
					const layout = await object.getLayout();
					setSelections(layout.qSelectionObject.qSelections);
				})
			})
		}
	}, [app]);

    return (
		<div>
			
		</div>
    );
};

export default CurrentSelections;