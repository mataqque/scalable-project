import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authApi } from './apis/authApi.api';
import headerSlice from './components/header';

const middleware = [authApi.middleware];

export const store = configureStore({
	reducer: {
		headerSlice: headerSlice,
		[authApi.reducerPath]: authApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});

// setupListeners(store.dispatch)
