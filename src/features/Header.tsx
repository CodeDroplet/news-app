import { HeaderLink } from '../components/HeaderLink';
import CountryButton from './CountryButton';

const Header = () => {
	return (
		<div className="flex justify-between">
			<div className="flex divide-x-2 divide-slate-700 border-r-2 border-slate-700">
				<HeaderLink to="/">Top News</HeaderLink>
				<HeaderLink to="search">Search</HeaderLink>
			</div>
			<div className="flex divide-x-2 divide-slate-700 border-l-2 border-slate-700">
				<CountryButton country={{ name: 'United States', code: 'us' }}>US</CountryButton>
				<CountryButton country={{ name: 'Great Britain', code: 'gb' }}>GB</CountryButton>
			</div>
		</div>
	);
};

export default Header;
