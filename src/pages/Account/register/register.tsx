import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export const Register = () => {
	const [loading, setLoading] = useState(true);
	return (
		<>
			<Helmet>
				<title>Register</title>
			</Helmet>
			<h1>Register</h1>
		</>
	);
};
