import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledHeader = styled.section`
	padding: 1rem;
	height: 5rem;
	background-color: #fff;
	box-shadow: 0px 4px 10px #eee;

	& nav {
		height: 100%;

		& ul {
			list-style-type: none;
			height: 100%;
			margin: 0;
			padding: 0;
			display: grid;
			grid-template-columns: repeat(4, 10rem);
			place-items: center;

			& li a {
				text-decoration: none;
			}
		}
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<nav>
				<ul>
					<li>
						<Link to="/home">Home</Link>
					</li>
					<li>
						<Link to="/operations">Operation</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</StyledHeader>
	);
};

export default Header;
