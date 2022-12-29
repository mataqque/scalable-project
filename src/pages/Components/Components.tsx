import { LoginSchema } from '../../components/helpers/common/forms/constraints/ValidatonSchemas';
import { FormContainer } from '../../components/helpers/common/forms/Form';
import { FormStyled } from '../../components/UI/GlobalComponents/Form/form';
import { ParametersForm } from '../Account/interfaces/interface';
import { useState } from 'react';
import { ImageBrand } from '../Account/components/brand';
import { SeparatorHorizontal } from '../../components/UI/GlobalComponents/separators/separators';
import { FormSearch, InputText } from '../../components/UI/inputs/inputText';
import { InputSelect } from '../../components/UI/inputs/inputSelect';
import { InputDateRange } from '../../components/UI/inputs/inputDateRange';
import { LazyImage } from '../../components/UI/lazyImages/images';
import { BtnIcon, ButtonBase, ButtonOutline } from '../../components/UI/GlobalComponents/buttons/buttonBase';
import { InputRadioBtn } from '../../components/UI/inputs/radeoButton';
import { IconAvatar } from '../../components/UI/GlobalComponents/IconAvatar/IconAvatar';
import { faker } from '@faker-js/faker';
import { InputChecked } from '../../components/UI/inputs/inputChecked';
import { List } from 'rsuite';
import { ItemList } from '../../components/UI/GlobalComponents/List/list';
import { ProgressBar } from '../../components/UI/progressBar/progressBar';
import { convertToDate } from '../../components/helpers/helpers';
import { IconMask } from '../../components/UI/inputs/styled/IconDownStyleSelect';

interface IUsers {
	name: string;
	lname: string;
	image: string;
	dateUpate: Date;
}

export default function Components() {
	const dataSelect = [
		{ value: '1', label: 'Colaborador' },
		{ value: '3', label: 'Editor' },
		{ value: '4', label: 'Supervisor' },
		{ value: '2', label: 'Organización' },
	];
	const [initialValues, setInitialValues] = useState({
		user: '',
	});
	const createUser = () => {
		return {
			name: faker.name.findName(),
			lname: faker.name.lastName(),
			image: faker.image.avatar(),
			dateUpate: faker.date.past(),
			percent: faker.random.numeric(2),
		};
	};

	const createUsers = (numUsers = 5) => {
		return Array.from({ length: numUsers }, createUser);
	};

	const fakeUsers: IUsers[] = createUsers(20);
	console.log(fakeUsers);
	const handleSubmit = async (values: any) => {};
	return (
		<main className='dark:bg-black'>
			<div className='container'>
				<ImageBrand className='bg-gray-500 '></ImageBrand>
				<h1 className='text-letter dark:text-white text-8xl'>Title</h1>
				<h1 className='text-letter dark:text-white text-7xl'>Title</h1>
				<h1 className='text-letter dark:text-white text-6xl'>Title</h1>
				<h1 className='text-letter dark:text-white text-5xl'>Title</h1>
				<h1 className='text-letter dark:text-white text-4xl'>Title</h1>
				<h1 className='text-letter dark:text-white text-3xl'>Title</h1>
				<h1 className='text-letter dark:text-white text-2xl'>Title</h1>
				<h1 className='text-letter dark:text-white text-base'>Title</h1>
				<p className='paragraph dark:text-gray-100'>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
					took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
					PageMaker including versions of Lorem Ipsum.
				</p>
				<SeparatorHorizontal />
				<h1 className='text-letter text-2xl mb-4'>Inputs</h1>
				<div className='w-full mb-4'>
					<FormContainer initialValues={initialValues} validationSchema={LoginSchema} onSubmit={handleSubmit}>
						{(form: any) => {
							const { handleSubmit, isSubmitting }: ParametersForm = form;
							return (
								<FormStyled onSubmit={handleSubmit}>
									<div className='flex flex-wrap'>
										<div className='order w-1/4 p-2'>
											<InputText name='organization' placeholder='Nombre' form={form} />
										</div>
										<div className='order w-1/4 p-2'>
											<InputText name='organization' placeholder='Apellido' form={form} />
										</div>
										<div className='order w-1/4 p-2'>
											<InputText name='organization' placeholder='Correo Electrónico' form={form} />
										</div>
										<div className='order w-1/4 p-2'>
											<InputText name='organization' placeholder='Organización' form={form} />
										</div>
										<div className='order w-1/4 p-2'>
											<InputSelect name='employment' form={form} data={dataSelect} label={'Cargo'} />
										</div>
										<div className='order w-1/4 p-2'>
											<InputText name='organization' placeholder='Organización' form={form} />
										</div>
										<div className='order w-1/4 p-2'>
											<InputSelect name='employment' form={form} data={dataSelect} label={'Cargo'} />
										</div>
										<div className='order w-1/4 p-2'>
											<InputDateRange startDate='' />
										</div>
										<div className='order w-1/4 p-2'>
											<InputRadioBtn name='enable' form={form}></InputRadioBtn>
										</div>
										<div className='order w-1/4 p-2'>
											<InputRadioBtn name='enable' form={form} className='radio'></InputRadioBtn>
										</div>
										<div className='order w-1/4 p-2'>
											<InputChecked name='option1' form={form}></InputChecked>
										</div>
									</div>
								</FormStyled>
							);
						}}
					</FormContainer>
				</div>
				<div className='w-80'>
					<FormSearch placeholder={'Buscar'}></FormSearch>
				</div>
				<SeparatorHorizontal />
				<h1 className='text-letter text-2xl mb-4'>Botones</h1>
				<div className='flex flex-col '>
					<ButtonBase className='mr-2'>Base button</ButtonBase>
					<div className='flex my-4'>
						<ButtonBase className='bg-info text-white mr-2'>Action button</ButtonBase>
						<ButtonBase className='bg-success text-white mr-2'>Action button</ButtonBase>
						<ButtonBase className='bg-danger text-white mr-2'>Action button</ButtonBase>
						<ButtonBase className='bg-purple-500 text-white mr-2'>Action button</ButtonBase>
						<ButtonBase className='bg-gray-200 mr-2 text-white'>Action button</ButtonBase>
						<ButtonBase className='bg-gray-300 mr-2 text-white mr-auto'>Action button</ButtonBase>
					</div>
					<div className='flex mb-4'>
						<ButtonOutline className='text-white hover:border-info hover:bg-info hover:text-white border-info mr-2 text-info'>Action button</ButtonOutline>
						<ButtonOutline className='text-white hover:border-success hover:bg-success hover:text-white border-success mr-2 text-success'>Action button</ButtonOutline>
						<ButtonOutline className='text-white hover:border-danger hover:bg-danger hover:text-white border-danger mr-2 text-danger'>Action button</ButtonOutline>
						<ButtonOutline className='text-white hover:border-purple-500 hover:bg-purple-500 hover:text-white border-purple-500 mr-2 text-purple-500'>Action button</ButtonOutline>
					</div>
					<div className='flex '>
						<BtnIcon className='mr-2 flex items-center justify-center border-success'>
							<IconMask className='icon-edit bg-success w-1/2 h-1/2' />
						</BtnIcon>
						<BtnIcon className='mr-2 flex items-center justify-center border-danger'>
							<IconMask className='icon-edit bg-danger w-1/2 h-1/2' />
						</BtnIcon>
						<BtnIcon className='mr-2 flex items-center justify-center border-info'>
							<IconMask className='icon-edit bg-info w-1/2 h-1/2' />
						</BtnIcon>
						<BtnIcon className='mr-2 flex items-center justify-center border-danger'>
							<IconMask className='icon-delete bg-danger w-1/2 h-1/2' />
						</BtnIcon>
					</div>
				</div>
				<SeparatorHorizontal />
				<h1 className='text-letter text-2xl mb-4'>Loaders</h1>
				<div className='flex'>
					<div className='content-img w-40 h-40 mr-4'>
						<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='100%' />
					</div>
					<div className='content-img w-40 h-40 mr-4'>
						<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='10px' />
					</div>
					<div className='content-img w-80 h-40 mr-4'>
						<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='10px' />
					</div>
					<div className='flex flex-col '>
						<div className='w-80 h-3 mb-1'>
							<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='5px' />
						</div>
						<div className='w-80 h-3 mb-1'>
							<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='5px' />
						</div>
						<div className='w-80 h-3 mb-1'>
							<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='5px' />
						</div>
						<div className='w-80 h-3 mb-1'>
							<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='5px' />
						</div>
						<div className='w-80 h-3 mb-1'>
							<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='5px' />
						</div>
						<div className='w-80 h-3 mb-1'>
							<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='5px' />
						</div>
						<div className='w-60 h-3'>
							<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='5px' />
						</div>
					</div>
				</div>
				<SeparatorHorizontal />
				<h1 className='text-letter text-2xl mb-4'>Avatares</h1>
				<div className='flex my-4'>
					{fakeUsers.map((user: any, index: number) => {
						return (
							<div className='mr-6' key={index + 'avatar'}>
								<IconAvatar name={user.name} photo={user.image} />
							</div>
						);
					})}
				</div>
				<div className='flex'>
					{fakeUsers.map((user: any, index: number) => {
						return (
							<div className='mr-6'>
								<IconAvatar name={user.name} photo='' />
							</div>
						);
					})}
				</div>
				<SeparatorHorizontal />
				<h1 className='text-letter text-2xl mb-4'>Lista</h1>
				<div className='flex flex-col'>
					<List></List>
				</div>
				<table className='table-auto w-full text-sm'>
					<thead>
						<tr className=' text-gray-700'>
							<th className='px-4 py-2 text-left'>
								<InputChecked name=''></InputChecked>
							</th>
							<th className='px-4 py-2 text-left'>Nombre</th>
							<th className='px-4 py-2 text-left'>Uso</th>
							<th className='px-4 py-2 text-left'>Última actualización</th>
							<th className='px-4 py-2 text-left'>Etiquetas</th>
							<th className='px-4 py-2 text-left'>Accciones</th>
						</tr>
					</thead>
					<tbody>
						{fakeUsers.map((user: any, index: number) => {
							return (
								<tr className='text-gray-700 hover:bg-gray-100 border-b border-b-stone-100 ' key={index + 'item-list'}>
									<td className='px-4 py-2'>
										<InputChecked name=''></InputChecked>
									</td>
									<td className='px-4 py-2 flex items-center'>
										<IconAvatar name={user.name} photo={user.image} />
										<div className='flex flex-col ml-4'>
											<h1 className='text-letter text-base leading-4 mb-1'>{user.name}</h1>
											<p className='text-letter text-sm leading-3	'>{user.lname}</p>
										</div>
									</td>
									<td className='px-4 py-2 w-60'>
										<div className='w-full'>
											<ProgressBar progress={user.percent} height='6px'></ProgressBar>
										</div>
									</td>
									<td className='px-4 py-2 text-sm'>{convertToDate(user.dateUpate)}</td>
									<td className='px-4 py-2 text-sm w-40'>
										<div className='flex'>
											<div className='text-sm rounded-md border border-slate-300 w-max px-3 py-1 mr-3'>Admin</div>
											<div className='text-sm rounded-md border border-slate-300 w-max px-3 py-1'>Subcriptor</div>
										</div>
									</td>
									<td className='px-4 py-2 text-sm flex w-40'>
										<div className='flex items-center align-center'>
											<BtnIcon className='mr-4 flex items-center justify-center border-info'>
												<IconMask className='icon-edit bg-info w-1/2 h-1/2' />
											</BtnIcon>
											<BtnIcon className='mr-4 flex items-center justify-center border-danger'>
												<IconMask className='icon-delete bg-danger w-1/2 h-1/2' />
											</BtnIcon>
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</main>
	);
}
