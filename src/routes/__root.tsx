import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import Header from '../components/layout/Header';

import './__root.css';

export const Route = createRootRoute({
	component: () => <App />,
});

const App = () => {
	return (
		<>
			<Header />
			<hr />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	);
};
