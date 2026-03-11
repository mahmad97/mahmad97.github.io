import type { ReactElement } from 'react';

import { Link } from 'react-router';

import MALogo from '@/assets/logos/MA.svg?react';
import Navigation from '@/components/layout/Navigation';
import ThemeToggle from '@/components/ui/ThemeToggle';

const Sidebar = (): ReactElement => {
	return (
		<aside className='w-48 px-4 py-3 shrink-0 hidden md:flex flex-col border-r border-slate-400 dark:border-slate-600 transition-colors duration-200'>
			<div className='pb-3 border-b border-slate-400 dark:border-slate-600 transition-colors duration-200'>
				<Link to='/' className='w-10 h-10 [&>svg]:w-full [&>svg]:h-full block'>
					<MALogo />
				</Link>
			</div>

			<Navigation onClose={() => {}} />

			<div className='pt-3 border-t border-slate-400 dark:border-slate-600 transition-colors duration-200'>
				<ThemeToggle />
			</div>
		</aside>
	);
};

export default Sidebar;
