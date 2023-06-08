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
				// Switcher Fragment
				// Latter Grid
				{
					"source": "14",
					"signal": "switch_0",
					"destination": "19",
					"slot": "hidden",
					"slot_param": "true"
				},
				// Button
				{
					"source": "14",
					"signal": "switch_0",
					"destination": "52",
					"slot": "hidden",
					"slot_param": "false"
				},
				// Former Text
				{
					"source": "14",
					"signal": "switch_0",
					"destination": "33",
					"slot": "hidden",
					"slot_param": "false"
				},
				// Radio Tile Group
				{
					"source": "14",
					"signal": "switch_0",
					"destination": "37",
					"slot": "hidden",
					"slot_param": "false"
				},
				// Radio Tile Group
				{
					"source": "14",
					"signal": "switch_1",
					"destination": "37",
					"slot": "hidden",
					"slot_param": "true"
				},
				// Latter Grid
				{
					"source": "14",
					"signal": "switch_1",
					"destination": "19",
					"slot": "hidden",
					"slot_param": "false"
				},
				// Former Text
				{
					"source": "14",
					"signal": "switch_1",
					"destination": "33",
					"slot": "hidden",
					"slot_param": "true"
				},
				// Button
				{
					"source": "14",
					"signal": "switch_1",
					"destination": "52",
					"slot": "hidden",
					"slot_param": "true"
				},
				// Toggle Fragment
				{
					"source": "16",
					"signal": "toggleOn",
					"destination": "14",
					"slot": "hidden",
					"slot_param": "true"
				},
				{
					"source": "16",
					"signal": "toggleOff",
					"destination": "14",
					"slot": "hidden",
					"slot_param": "false"
				},
				{
					"source": "2",
					"signal": "click",
					"destination": "3",
					"slot": "hidden",
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
