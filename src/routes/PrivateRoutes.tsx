import { lazy, Suspense } from 'react';
import { Login } from '../pages/Account/login/login';
import { ErrorBoundary } from './Boundary';
import { StyledEngineProvider } from '@mui/material/styles';

type Props = {
	children: React.ReactNode;
};

function Component(props: Props) {
	return (
		<Suspense fallback={<></>}>
			<ErrorBoundary>{props.children}</ErrorBoundary>
		</Suspense>
	);
}

export const PrivateRoutes = {
	Dashboard: (
		<Component>
			<h1>Dashboard</h1>
		</Component>
	),
};
