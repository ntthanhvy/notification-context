import React from 'react';
import moment from 'moment';

import Timeline from 'react-calendar-timeline';

import { useOperationUIContext } from './OperationUIContext';

import styled from 'styled-components';

const StyledOperationPage = styled.div``;

const initGroups = [ { id: 1, title: 'group-1' }, { id: 2, title: 'group-2' } ];

const initItems = [
	{
		id: 1,
		group: 1,
		title: 'item 1',
		start_time: moment(),
		end_time: moment().add(1, 'hour')
	},
	{
		id: 2,
		group: 2,
		title: 'item 2',
		start_time: moment().add(-0.5, 'hour'),
		end_time: moment().add(0.5, 'hour')
	},
	{
		id: 3,
		group: 1,
		title: 'item 3',
		start_time: moment().add(2, 'hour'),
		end_time: moment().add(3, 'hour')
	}
];

const OperationPage = () => {
	const [ groups, setGroups ] = React.useState(initGroups);
	const [ items, setItems ] = React.useState(initItems);

	const operationUIContext = useOperationUIContext();
	const operationUIProps = React.useMemo(
		() => {
			return {};
		},
		[ operationUIContext ]
	);
	return (
		<>
			Rendered by react!
			<Timeline
				groups={groups}
				items={items}
				canMove={false}
				canResize={false}
				defaultTimeStart={moment().add(-12, 'hour')}
				defaultTimeEnd={moment().add(12, 'hour')}
				traditionalZomm={true}
				minZoom={60 * 60 * 1000 * 24 * 30}
				maxZoom={60 * 60 * 1000 * 24 * 7}
			/>
		</>
	);
};

export default OperationPage;
