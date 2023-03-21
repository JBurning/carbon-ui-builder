import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalStateContext } from '../../context';
import { UIFragment } from '../../ui-fragment/src/ui-fragment';

export const View = () => {
	const { fragments, getExpandedFragmentState } = useContext(GlobalStateContext);

	const params = useParams();

	// Gets JSON from editor
	const fragment = fragments.find((fragment: any) => fragment.id === params.id);

	// TEMP, REVERT THIS CHANGE LATER
	if (!fragment.data.actions) {
		fragment.data.actions = [
				{
					"source": "14",
					"signal": "switch_1",
					"destination": "19",
					"slot": "isHidden",
					"slot_param": "true"
				},
				{
					"source": "14",
					"signal": "switch_2",
					"destination": "37",
					"slot": "isHidden",
					"slot_param": "true"
				},
				{
					"source": "16",
					"signal": "toggle_on",
					"destination": "14",
					"slot": "isHidden",
					"slot_param": "true"
				},
				{
					"source": "16",
					"signal": "toggle_off",
					"destination": "14",
					"slot": "isHidden",
					"slot_param": "false"
				},
				{
					"source": "2",
					"signal": "click",
					"destination": "3",
					"slot": "isHidden",
					"slot_param": "true"
				}
			]
		}

	// Converts JSON to React State
	const [fragmentState, setFragmentState] = useState(getExpandedFragmentState(fragment));

	

	return <UIFragment
		state={fragmentState}
		setState={(state) => setFragmentState(state)} />;
};
