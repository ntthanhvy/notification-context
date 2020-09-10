import React from 'react';
import styled from 'styled-components';

import { Card } from '../../components/ui-kits';
import OperationsPage from './OperationPage'

const Operation = () => {
	return (
		<Card>
			<Card.Header>
				<h4>Trip Operations</h4>
			</Card.Header>
			<Card.Body>
				<OperationsPage />
			</Card.Body>
		</Card>
	);
};

export default Operation;
