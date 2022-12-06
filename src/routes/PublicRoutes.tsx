import React, { Suspense } from 'react';

const Account = React.lazy(() =>
	import(/* webpackChunkName:"account"*/ '../pages/Account/Account').then(module => {
		return { default: module.Account };
	})
);
const Login = React.lazy(() =>
	import(/* webpackChunkName:"login"*/ '../pages/Account/login/login').then(module => {
		return { default: module.Login };
	})
);

const Register = React.lazy(() =>
	import(/* webpackChunkName:"register"*/ '../pages/Account/register/register').then(module => {
		return { default: module.Register };
	})
);
const RecoveryPass = React.lazy(() =>
	import(/* webpackChunkName:"recovery"*/ '../pages/Account/recoveryPassword/recoveryPassword').then(module => {
		return { default: module.RecoveryPassword };
	})
);

import Boundary from './Boundary';

export const PublicRoutes = {
	Account: (
		<Boundary>
			<Account />
		</Boundary>
	),
	Login: (
		<Boundary>
			<Login />
		</Boundary>
	),
	Register: (
		<Boundary>
			<Register />
		</Boundary>
	),
	Recovery: (
		<Boundary>
			<RecoveryPass />
		</Boundary>
	),
};
