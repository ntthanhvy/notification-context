import React from 'react';

import { StyledCard, StyledCardHeader, StyledCardBody } from './Card.styled';

const Card = ({ children }) => {
	return <StyledCard>{children}</StyledCard>;
};

Card.Header = StyledCardHeader;
Card.Body = StyledCardBody;

export const CardBody = ({ children }) => <StyledCardBody>{children}</StyledCardBody>;
export const CardHeader = ({ children }) => <StyledCardHeader>{children}</StyledCardHeader>;

export default Card;
