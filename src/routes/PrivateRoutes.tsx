import { Suspense } from 'react';
import { Login } from '../pages/Account/login/login';
import { ErrorBoundary } from './Boundary';

type Props = {
	children: React.ReactNode;
};
function Component(props: Props) {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ErrorBoundary>{props.children}</ErrorBoundary>
		</Suspense>
	);
}

export const PrivateRoutes = {
	Dashboard: (
		<Component>
			<Login />
		</Component>
	),
};
