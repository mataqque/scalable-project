import { FormEventHandler, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginSchema } from '../../../components/helpers/common/forms/constraints/ValidatonSchemas';
import { FormContainer, setInputProps } from '../../../components/helpers/common/forms/Form';

export const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [iconShowPassword, SetIconShowPassword] = useState(true);
	const inputPassword = useRef<HTMLInputElement>(null);
	const [initialValues, setInitialValues] = useState({
		email: '',
		password: '',
	});
	const showPassword = () => {
		inputPassword.current?.getAttribute('type') === 'password' ? SetIconShowPassword(false) : SetIconShowPassword(true);
	};
	const handleSubmit = (values: any) => {
		console.log(values);
	};

	return (
		<>
			<Helmet>
				<title>Login</title>
			</Helmet>
			<FormContainer initialValues={initialValues} validationSchema={LoginSchema} onSubmit={handleSubmit}>
				{(form: any) => {
					const { handleSubmit, errors, touched, isSubmitting, resetForm } = form;
					return (
						<form className='form-style' onSubmit={handleSubmit}>
							<h1 className='title'>Login</h1>
							<div className='content-input f-column'>
								<label className='form-label'>Usuario</label>
								<input {...setInputProps('email', '', form)} placeholder='Ingresa el usuario'></input>
							</div>
							<div className='content-input f-column'>
								<div className='d-flex space-between'>
									<label className='form-label'>Contraseña</label>
									<div className='flex-shrink-0'>
										<div className=''>
											<a href='auth-recoverpw.html' className='text-muted'>
												Forgot password?
											</a>
										</div>
									</div>
								</div>

								<div className='input-group d-flex input-high'>
									<input type={iconShowPassword ? 'password' : 'text'} {...setInputProps('password', '', form)} ref={inputPassword}></input>

									<label
										className='btn look'
										id='password-addon'
										onClick={() => {
											showPassword();
										}}
									>
										{inputPassword.current?.getAttribute('type') == 'password' ? <i className='fas fa-eye-slash'></i> : <i className='fas fa-eye'></i>}
									</label>
								</div>
							</div>
							<div className='row mb-4 w-100'>
								<div className='col'>
									<div className='form-check'>
										<input className='form-check-input' type='checkbox' id='remember-check'></input>
										<label className='form-check-label' htmlFor='remember-check'>
											Recordarme
										</label>
									</div>
								</div>
							</div>
							<div className='mb-3'>
								<button className='btn btn-primary w-100 input-high' type='submit'>
									Ingresar
								</button>
							</div>
						</form>
					);
				}}
			</FormContainer>
		</>
	);
};
