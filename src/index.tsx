import './assets/scss/index.scss';
import React from 'react';
import RoutesDom from './router';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store } from './store/store';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
	<React.StrictMode>
		<HelmetProvider>
			<Provider store={store}>
				<RoutesDom />
			</Provider>
		</HelmetProvider>
	</React.StrictMode>
);
