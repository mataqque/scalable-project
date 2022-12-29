import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authApi, account } from './apis/authApi.api';
import headerSlice from './components/header';
import authSlice from './globlalSlice/auth/auth.slice';
const middleware = [account.middleware, authApi.middleware];

export const store = configureStore({
	reducer: {
		headerSlice: headerSlice,
		authSlice: authSlice,
		//self reducers
		[authApi.reducerPath]: authApi.reducer,
		[account.reducerPath]: account.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});

// setupListeners(store.dispatch)
