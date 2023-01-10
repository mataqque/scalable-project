import styled from 'styled-components';

export const DataGridStyled = styled.div`
	display: flex;
	flex-direction: column;
	.grid-head {
		grid-template-rows: repeat(1, auto);
		grid-template-columns: 3rem repeat(5, auto);
	}
	.checked {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
