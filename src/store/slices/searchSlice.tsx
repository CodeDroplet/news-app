import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type SearchState = {
	query: string;
};

const initialState: SearchState = {
	query: '',
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setQuery(state, action: PayloadAction<string>) {
			state.query = action.payload;
		},
	},
});

export const SearchActions = searchSlice.actions;
