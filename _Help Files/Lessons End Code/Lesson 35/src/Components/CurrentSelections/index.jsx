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

	const buttonsAreActive = selections.length > 0;

    return (
<div className={mobile ? "current-selections-container filter-actions-mobile" : "current-selections-container"} ref={containerRef}>
			<button
				className={
					buttonsAreActive
						? "btn btn-secondary"
						: "btn btn-secondary deactivated"
				}
				style={{marginRight: "10px"}}
				onClick={() => setOpened(!opened)}
			>
				Current Selections
				<span className='counter'>{selections.length || 0}</span>
			</button>
		</div>
    );
};

export default CurrentSelections;