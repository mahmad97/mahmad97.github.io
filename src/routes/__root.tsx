import type { ReactElement } from 'react';

import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import Header from '../components/layout/Header';

import './__root.css';

export const Route = createRootRoute({
	component: () => <App />,
});

const App = (): ReactElement => {
	return (
		<>
			<Header />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	);
};
