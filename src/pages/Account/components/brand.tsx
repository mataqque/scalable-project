import styled from 'styled-components';
import { IconMask } from '../../../components/UI/inputs/styled/IconDownStyleSelect';
import brand from '../../../assets/images/global/icons/infinix.svg?url';

export const ImageBrand = styled(IconMask).attrs({
	primary: true,
})`
	display: block;
	mask-image: url(${brand});
	height: 100px;
	width: 200px;
`;
