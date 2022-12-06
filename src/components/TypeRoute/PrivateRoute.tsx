import axios from 'axios';
// import './protected.scss';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ErrorBoundary } from '../../routes/Boundary';

export default function PrivateRoute(props: any) {
	const navigate = useNavigate();
	// const dispatch = useDispatch();
	return (
		<div>
			<ErrorBoundary>
				<Helmet>
					<script src='https://kit.fontawesome.com/6611670d58.js'></script>
				</Helmet>
			</ErrorBoundary>
			{props.children}
		</div>
	);
}
