import React from 'react';
import { ContentSwitcher, Switch } from 'carbon-components-react';
import { CssClasses } from '../types';
import { stringToCssClassName } from '../utils';

export interface ContentSwitcherState {
	type: string;
	items: [];
	size: [];
	id: string | number;
	selectedIndex: number;
	disabled?: string | boolean;
	cssClasses?: CssClasses[];
	style?: any;
	codeContext: {
		name: string;
	};
}

export const UIContentSwitcher = ({ state, sendSignal }: {
	state: ContentSwitcherState;
	setState: (state: any) => void;
	setGlobalState: (state: any) => void;
	sendSignal: (id: number | string, signal: string) => void;
}) => {
	if (state.type !== 'content-switcher') {
		// eslint-disable-next-line react/jsx-no-useless-fragment
		return <></>;
	}

	let cssClasses = state.cssClasses?.map((cc: any) => cc.id).join(' ') || '';

	if (state.style) {
		if (cssClasses.length > 0) {
			cssClasses += ' ';
		}
		cssClasses += stringToCssClassName(state.codeContext.name);
	}

	const handleSwitch = (item: any) => {
		console.log(state.id)
		sendSignal(state.id, 'switch_' + item.index)
	}

	return <ContentSwitcher
	size={state.size}
	selectedIndex={state.selectedIndex}
	onChange={(event: any) => handleSwitch(state.items[event.index])}
	className={cssClasses}>
		{
			state.items.map((step: any, index: number) => <Switch
				className={step.className}
				name={step.name}
				text={step.text}
				disabled={(state.disabled == true || state.disabled == "true") ? state.disabled : step.disabled}
				key={index}
			/>)
		}
	</ContentSwitcher>;
};
