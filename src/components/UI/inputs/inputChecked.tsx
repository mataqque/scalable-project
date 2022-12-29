import styled from 'styled-components';
import { checkableBoolProps } from '../../helpers/common/forms/Form';
import { generateId } from '../../helpers/helpers';
import { IconMask } from './styled/IconDownStyleSelect';
import { useRef } from 'react';
import { IInputCheckedProps } from './interface';
import check from './icons/icon-check.svg?url';
const InputCheckedStyled = styled.div`
	input {
		position: absolute;
		opacity: 0;
		pointer-events: none;
		&:checked + .input-checked {
			background-color: #2f71ff;
			border-color: #2f71ff;
			i {
				background-color: white;
			}
		}
	}
	.input-checked {
		width: 16px;
		height: 16px;
		border-color: #bbbbbb;
		border-width: 1.5px;
		border-style: solid;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
		i {
			width: 100%;
			height: 100%;
			background-color: transparent;
		}
	}
`;

export const InputChecked = (props: IInputCheckedProps) => {
	const { name, form, className } = props;
	const checkeable = useRef<HTMLInputElement>(null);
	const inputID = generateId({ type: 'string' }).toString();
	return (
		<div className={`content-input ${className ? className : ''}`}>
			<InputCheckedStyled className={`content-sub-input`}>
				<input type='checkbox' id={inputID} {...(form ? checkableBoolProps(name, ``, form) : {})} ref={checkeable} />
				<label className='input-checked' htmlFor={inputID}>
					<IconMask style={{ WebkitMaskImage: `url(${check})` }} />
				</label>
			</InputCheckedStyled>
		</div>
	);
};
