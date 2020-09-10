import React, { createContext, useReducer, useContext } from 'react';
import { Notification } from './Notification';
import moment from 'moment';

const NotificationUIContext = createContext();

export const useNotificationContext = () => {
	return useContext(NotificationUIContext);
};

const initialState = [];

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const REMOVE_ALL = 'REMOVE_ALL';

export const notificationReducer = (state, action) => {
	switch (action.type) {
		case ADD:
			return [
				...state,
				{
					id: +moment(),
					type: action.payload.type,
					message: action.payload.message
				}
			];
		case REMOVE:
			return state.filter((t) => t.id !== action.payload.id);
		case REMOVE_ALL:
			return initialState;
		default:
			return state;
	}
};

export const NotificationProvider = ({ children }) => {
	const [ notification, notificationDispatch ] = useReducer(notificationReducer, initialState);

	const value = {
		notification,
		notificationDispatch
	};
	return (
		<NotificationUIContext.Provider value={value}>
			{children}
			<Notification notification={notification} />
		</NotificationUIContext.Provider>
	);
};
