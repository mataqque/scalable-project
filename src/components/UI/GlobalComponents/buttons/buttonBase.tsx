import styled from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

interface ICircularImageProps {
	src: string;
	alt?: string;
}

export const ButtonBase = styled.button`
	height: 3rem;
	width: max-content;
	border-radius: 7px;
	border-width: 1px;
	border-style: solid;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem 1.5rem;
	min-width: 10rem;
`;

export const ButtonOutline = styled(ButtonBase)`
	background-color: transparent;
	transition: 0.5s;
`;

export const BtnIcon = styled.button`
	width: 2rem;
	height: 2rem;
	background-color: transparent;
	transition: 0.5s;
	border-radius: 7px;
	border-width: 1px;
	border-style: solid;
`;
