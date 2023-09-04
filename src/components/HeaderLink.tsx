import { NavLink, NavLinkProps } from 'react-router-dom';
import clsx from 'clsx';

export const HeaderLink: React.FC<NavLinkProps> = ({ className, ...restProps }) => {
	return (
		<NavLink
			className={({ isActive }) =>
				clsx(
					'px-4 py-2 font-semibold text-lg hover:bg-slate-700 cursor-pointer select-none transition hover:text-white',
					{ 'bg-slate-700 text-white': isActive },
					className
				)
			}
			{...restProps}
		/>
	);
};
