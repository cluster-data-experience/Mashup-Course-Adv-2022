/* eslint-disable no-undef */
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

	function clearAll() {
		if(app) {
			app.clearAll();
		}
	}

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
			<button
				className={
					buttonsAreActive
						? "btn btn-secondary"
						: "btn btn-secondary deactivated"
				}
				onClick={() => clearAll()}
			>
				Clear
			</button>
			{/* selections list */}
			<div className={opened ? "currentSelections active" : "currentSelections"}>
				{
					selections.length > 0 ? (
						selections.map( item => (
							<div className='selection' key={item.qField}>
								<div className="contentContainer">
									<span className="title">{item.qField}</span>
									<div className="selected-field-value">
										<span className="selected">{item.qSelected}</span>
										<button
											type='button'
											className='buttonClose'
											onClick={() => { clearfield(item) }}
										>
											<span className="material-icons">delete</span>
										</button>
									</div>
								</div>
							</div>
						))
					) : (
						<span className='noSelectionsMessage'>There are no no active selections</span>
					)
				}
			</div>
		</div>
    );
};

export default CurrentSelections;