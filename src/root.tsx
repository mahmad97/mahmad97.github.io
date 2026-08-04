import type { ReactElement, ReactNode } from 'react';

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

import AppShell from '@/components/layout/AppShell';
import Footer from '@/components/layout/Footer';

import './App.css';

// Runs before first paint so the page never flashes the wrong theme. Kept as an
// inline <head> script because it has to execute before hydration; the matching
// state is read by `useTheme`.
const setThemeScript = `
	function setTheme(newTheme) {
		if (newTheme === 'dark') document.documentElement.classList.add('dark');
		else document.documentElement.classList.remove('dark');
	}

	var preferredTheme = null;
	try {
		preferredTheme = localStorage.getItem('theme');
	} catch (_) {}

	if (preferredTheme && (preferredTheme === 'dark' || preferredTheme === 'light')) {
		setTheme(preferredTheme);
	} else {
		localStorage.setItem('theme', 'system');
		var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
		setTheme(systemTheme);
	}
`;

type LayoutProps = Readonly<{
	children: ReactNode;
}>;

const Layout = ({ children }: LayoutProps): ReactElement => (
	<html lang='en'>
		<head>
			<meta charSet='UTF-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<link rel='icon' type='image/svg+xml' href='/MA.svg' />
			<Meta />
			<Links />
			<script
				id='set-theme'
				dangerouslySetInnerHTML={{ __html: setThemeScript }}
			/>
		</head>
		<body className='w-full min-w-xs bg-slate-50 dark:bg-slate-950 text-neutral-800 dark:text-neutral-200'>
			{children}
			<ScrollRestoration />
			<Scripts />
		</body>
	</html>
);

const Root = (): ReactElement => (
	<div className='min-w-xs min-h-screen flex flex-col md:flex-row'>
		<AppShell />
		<div className='flex-grow flex flex-col'>
			<main className='flex-grow'>
				<Outlet />
			</main>
			<Footer />
		</div>
	</div>
);

export { Layout };
export default Root;
