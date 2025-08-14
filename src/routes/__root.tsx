import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import Header from '../components/layout/Header';

import './__root.css';

export const Route = createRootRoute({
	component: () => <App />,
});

const App = () => {
	return (
		<div className='w-full h-full bg-slate-50 dark:bg-slate-950 min-w-[640px]'>
			<Header />
			<Outlet />
			<TanStackRouterDevtools />
		</div>
	);
};
