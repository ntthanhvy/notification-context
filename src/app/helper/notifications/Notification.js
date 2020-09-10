import React from 'react';
import { Toast } from 'react-bootstrap';
import styled from 'styled-components';
import { useNotificationContext } from './NotificationUIContext';

const StyledToast = styled(Toast)`
    transition: .2s;
    max-height: 5rem;

    &:hover, 
    &:focus-within {
        trasform: translateX(-2rem);
    }
`;

const StyledToastList = styled.div`
	position: fixed;
	top: 2rem;
	right: 2rem;
	width: 300px;
	min-height: 40px;
`;

const StyledToastContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;
`;

export const Notification = ({ notification }) => {
	const { notificationDispatch } = useNotificationContext();

	const renderItem = (content) => {
		if (typeof content === 'function') {
			return content();
		} else {
			return (
				<StyledToast onClose={() => notificationDispatch({ type: 'REMOVE', payload: { id: content.id } })}>
					<Toast.Header className={`text-${content.type == 'error' ? 'danger' : content.type}`}>
						{content.type}
					</Toast.Header>
					<Toast.Body>
						{content.message} {content.id}
					</Toast.Body>
				</StyledToast>
			);
		}
	};

	return (
		<StyledToastList>
			<StyledToastContainer>
				{notification.map((noti) => {
					return renderItem(noti);
				})}
			</StyledToastContainer>
		</StyledToastList>
	);
};
