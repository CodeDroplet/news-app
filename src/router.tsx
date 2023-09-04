import { createBrowserRouter } from 'react-router-dom';
import App from './pages/TopNews';
import Search from './pages/Search';
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <App />,
			},
			{
				path: 'search',
				element: <Search />,
			},
		],
	},
]);

export default router;
