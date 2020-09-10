import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.section`
	padding: 1rem;
	height: 5rem;
	background-color: #fff;
	box-shadow: 0px -4px 10px #eee;
	display: flex;
    place-items: center;
    place-content: center;
`;

const Footer = () => {
	return (
		<StyledFooter>
			<span>&#169; COPYRIGHT by ntthanhvy</span>
		</StyledFooter>
	);
};

export default Footer;
