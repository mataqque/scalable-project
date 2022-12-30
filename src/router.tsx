import React, { ReactNode, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicRoute from './components/TypeRoute/PublicRoute';
import PrivateRoute from './components/TypeRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';
import { Header } from './components/helpers/header/header';
import { verifyCredential } from './components/TypeRoute/domain/verifyCredentials.service';

export default function RoutesDom(props: any): JSX.Element {
	return (
		<Router>
			<ToastContainer />
			<Header />
			<Routes>
				<Route path='/account' element={<PublicRoute>{PublicRoutes.Account}</PublicRoute>}>
					<Route path='login' element={PublicRoutes.Login} />
					<Route path='register' element={PublicRoutes.Register} />
					<Route path='password-recovery' element={PublicRoutes.Recovery} />
				</Route>
				<Route path='/components' element={<PublicRoute>{PublicRoutes.Components}</PublicRoute>} />
			</Routes>
			<Routes>
				<Route path='/privated' element={<PrivateRoute verifyCredential={''}>{PrivateRoutes.Dashboard}</PrivateRoute>}></Route>
			</Routes>
		</Router>
	);
}
