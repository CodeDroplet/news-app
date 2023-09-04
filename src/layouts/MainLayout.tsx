import { Outlet } from 'react-router-dom';
import Header from '../features/Header';

const MainLayout = () => {
	return (
		<div className="w-screen h-screen py-5 px-5 md:px-0">
			<div className=" h-full flex flex-col md:container overflow-hidden mx-auto border-2 border-slate-700 divide-y-2 divide-slate-700">
				<Header />
				<div className="flex-1 text-slate-800 flex flex-col px-5 py-5 gap-3 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-300">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
