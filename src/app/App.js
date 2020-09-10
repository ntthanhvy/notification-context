import React from 'react';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import BasePage from './BasePage';

const theme = {
	font: {
		fontSize: 14
	}
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<BasePage />
			</Router>
		</ThemeProvider>
	);
}

export default App;
