import React from 'react';

const OperationUIContext = React.createContext();

export const useOperationUIContext = () => {
	return React.useContext(OperationUIContext);
};

const OperationProvider = ({ UIEvents, children }) => {
	const value = {};
	return <OperationUIContext.Provider value={value}>{children}</OperationUIContext.Provider>;
};

export default OperationProvider;
