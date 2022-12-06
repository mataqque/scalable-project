import React, { ReactNode, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicRoute from './components/TypeRoute/PublicRoute';
import PrivateRoute from './components/TypeRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';
import { Header } from './components/helpers/header/header';

export default function RoutesDom(props: any): JSX.Element {
	return (
		<Router>
			<ToastContainer />
			<Header />
			<Routes>
				<Route path='/account' element={<PublicRoute>{PublicRoutes.Account}</PublicRoute>}>
					<Route path='login' element={PublicRoutes.Login} />
					<Route path='register' element={PublicRoutes.Register} />
					<Route path='recovery' element={PublicRoutes.Recovery} />
				</Route>
			</Routes>
			<Routes>
				<Route path='/dashboard' element={<PrivateRoute>{PrivateRoutes.Dashboard}</PrivateRoute>}>
					{/* <Route path='/' element={<PrivateRoute>{PrivateRoutes.home}</PrivateRoute>} /> */}
				</Route>
			</Routes>
		</Router>
	);
}
