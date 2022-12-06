import './Account.scss';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

export const Account = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [iconShowPassword, SetIconShowPassword] = useState(true);
	const inputPassword = useRef<HTMLInputElement>(null);

	const showPassword = () => {
		inputPassword.current?.getAttribute('type') === 'password' ? SetIconShowPassword(false) : SetIconShowPassword(true);
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(e.value);
		// let username = document.getElementById('username').value;
		// let password = document.getElementById('password').value;
		// axios
		// 	.post('/users/verifyUser', { username, password })
		// 	.then(res => {
		// 		if (res.data.status === 200) {
		// 			localStorage.setItem('token', res.data.token);
		// 			navigate('/dashboard');
		// 		}
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 	});
	};

	return (
		<>
			<Helmet>
				<title>Login</title>
			</Helmet>
			<main className='auth-page'>
				<Helmet>
					<script src='https://kit.fontawesome.com/6611670d58.js' crossOrigin='anonymous'></script>
				</Helmet>
				<div className='auth-full-page-content'>
					<div className='auth-brand'></div>
					<Outlet />
					<div className='auth-footer'>© 2022 created with ♥ by Flavio</div>
				</div>
				<div className='bg-auth'>
					<div className='content-img'>
						<ul className='bg-bubbles'>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
						<img className='img-expand' src={require('../../assets/images/Account/auth-bg.jpg')}></img>
					</div>
				</div>
			</main>
		</>
	);
};
