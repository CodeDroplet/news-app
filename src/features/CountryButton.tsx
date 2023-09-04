import { PropsWithChildren } from 'react';
import { Country } from '../types';
import { useAppDispatch, useAppSelector } from '../store';
import { CountryActions } from '../store/slices/countrySlice';
import clsx from 'clsx';

type CountryButtonProps = {
	country: Country;
};

const CountryButton: React.FC<PropsWithChildren<CountryButtonProps>> = ({ country, children }) => {
	const currentCountry = useAppSelector((state) => state.country.current);
	const dispatch = useAppDispatch();
	const handleClick = () => {
		dispatch(CountryActions.setCurrentCountry(country));
	};

	return (
		<div
			className={clsx(
				'px-3 py-2 font-semibold text-lg hover:bg-slate-700 cursor-pointer select-none transition hover:text-white',
				{
					'bg-slate-700 text-white': currentCountry?.code === country.code,
				}
			)}
			onClick={handleClick}
		>
			{children}
		</div>
	);
};

export default CountryButton;
