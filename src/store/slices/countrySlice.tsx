import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Country } from '../../types';

type CountryState = {
	current: Country;
};

const initialState: CountryState = {
	current: {
		code: 'us',
		name: 'United States',
	},
};

const countrySlice = createSlice({
	name: 'country',
	initialState,
	reducers: {
		setCurrentCountry(state, action: PayloadAction<Country>) {
			state.current = action.payload;
		},
	},
});

export const CountryActions = countrySlice.actions;
export default countrySlice.reducer;
