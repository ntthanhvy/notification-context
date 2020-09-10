import React from 'react';

import styled from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';

const StyledLayout = styled.section`
	background-color: #e2eeee;
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;

	// text
	color: #8d93ab;
	font-size: 1em;
`;

const StyledBody = styled.section`
	padding: 3rem;
	flex-grow: 1;
`;

const Layout = ({ children }) => {
	return (
		<StyledLayout>
			<Header />
			<StyledBody>{children}</StyledBody>
			<Footer />
		</StyledLayout>
	);
};

export default Layout;
