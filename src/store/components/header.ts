import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: '',
};
export const headerSlice = createSlice({
	name: 'headerSlice',
	initialState,
	reducers: {
		setData: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const { setData } = headerSlice.actions;
export default headerSlice.reducer;
