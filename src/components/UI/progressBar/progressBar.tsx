import styled from 'styled-components';

interface IPropsStyled {
	heightbar: string;
}
interface IProgressBarProps {
	progress: number;
	color?: string;
	height?: string;
	rest?: any;
}

const ProgressBarStyled = styled.div`
	width: 100%;
	height: ${(props: IPropsStyled) => props.heightbar};
`;

export const ProgressBar = ({ progress, color, height, ...rest }: IProgressBarProps) => {
	return (
		<ProgressBarStyled className='bg-gray-100 h-6 rounded-full w-full' heightbar={height ? height : '10px'}>
			<div className='bg-blue-500 h-full rounded-full' style={{ width: `${progress}%` }} />
		</ProgressBarStyled>
	);
};
