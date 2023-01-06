import { useEffect, useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { ImageBrand } from '../../../../pages/Account/components/brand';
import { ContainerNav, NavbarLink } from './navbar.styled';
import { SeparatorVertical } from '../../GlobalComponents/separators/separators';
export default function Navbar() {
	return (
		<ContainerNav>
			<Link to='/' className='brand bold'>
				<ImageBrand className='bg-white' sizeH='100%' sizeW='150px'></ImageBrand>
			</Link>
			<div className='container-link flex w-full'>
				<div className='center flex items-center justify-center w-full'>
					<NavbarLink to='/home' className='mr-6'>
						<span className='text-link text-white'>Home</span>
						<span className='line'></span>
					</NavbarLink>
					<NavbarLink to='/components' className='mr-6'>
						<span className='text-link text-white'>Components</span>
						<span className='line'></span>
					</NavbarLink>
					<NavbarLink to='/account/login' className='mr-2'>
						<span className='text-link text-white'>Login</span>
						<span className='line'></span>
					</NavbarLink>
				</div>
				<div className='w-max'></div>
				<SeparatorVertical opacity={0.2}></SeparatorVertical>
				<div className='link-buttons flex w-max'>
					<Link to='/account/login' className='rounded-full text-white border-info bg-info border-info mr-3  px-5 py-2 whitespace-nowrap hover:text-white'>
						Sign In
					</Link>
					<Link to='/account/register' className='rounded-full text-white border-info bg-info border-info mr-2 px-5 py-2 whitespace-nowrap hover:text-white'>
						Register
					</Link>
				</div>
			</div>
		</ContainerNav>
	);
}
