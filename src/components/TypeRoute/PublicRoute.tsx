import { Helmet } from 'react-helmet-async';
import Footer from '../Page/Footer/footer';
import Navbar from '../Page/Navbar/navbar';

export default function PublicRoute(props: any) {
	return (
		<>
			<Navbar />
			{props.children}
			<Footer />
		</>
	);
}
