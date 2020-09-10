import React from 'react';
import { useNotificationContext } from '../../helper/notifications';
import { Button, ButtonGroup } from 'react-bootstrap';
import styled from 'styled-components';

const StyledHome = styled.div``;

const Home = () => {
	const { notificationDispatch } = useNotificationContext();

	return (
		<StyledHome>
			<h1>Home</h1>

			<Button
				className="mr-2"
				variant="success"
				onClick={() =>
					notificationDispatch({
						type: 'ADD',
						payload: {
							type: 'success',
							message: 'This is a success message'
						}
					})}>
				Success
			</Button>
			<Button
				className="mr-2"
				variant="danger"
				onClick={() =>
					notificationDispatch({
						type: 'ADD',
						payload: {
							type: 'error',
							message: 'This is a error message'
						}
					})}>
				Error
			</Button>
			<Button
				className="mr-2"
				variant="warning"
				onClick={() =>
					notificationDispatch({
						type: 'ADD',
						payload: {
							type: 'warning',
							message: 'This is a warning message'
						}
					})}>
				Warning
			</Button>
		</StyledHome>
	);
};

export default Home;
