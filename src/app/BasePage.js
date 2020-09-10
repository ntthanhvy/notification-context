import React from 'react';
import Layout from './components/Layout';
import Router from './Router';

const BasePage = () => {
	return (
		<Layout>
			<Router />
		</Layout>
	);
};

export default BasePage;
