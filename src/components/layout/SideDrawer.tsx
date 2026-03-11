import type { ReactElement } from 'react';

import { LuX } from 'react-icons/lu';
import { Link } from 'react-router';

import MALogo from '@/assets/logos/MA.svg?react';
import Navigation from '@/components/layout/Navigation';

type SideDrawerProps = Readonly<{
	isOpen: boolean;
	closeDrawer: () => void;
}>;

const SideDrawer = ({ isOpen, closeDrawer }: SideDrawerProps): ReactElement => {
	return (
		<>
			<div
				className={`md:hidden fixed inset-0 z-20 bg-black/20 dark:bg-black/40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
				onClick={closeDrawer}
			/>
			<aside
				className={`fixed left-0 z-30 w-64 h-full px-4 py-3 border-r md:hidden flex flex-col border-slate-400 dark:border-slate-600 backdrop-blur transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
				<div className='flex items-center justify-between pb-3 border-b border-slate-400 dark:border-slate-600 transition-colors duration-200'>
					<Link
						to='/'
						className='w-10 h-10 [&>svg]:w-full [&>svg]:h-full'
						onClick={closeDrawer}>
						<MALogo />
					</Link>

					<button
						type='button'
						className='cursor-pointer text-blue-500'
						aria-label='Open menu'
						onClick={closeDrawer}>
						<LuX size={24} strokeWidth={2.5} />
					</button>
				</div>

				<Navigation onClose={closeDrawer} />
			</aside>
		</>
	);
};

export default SideDrawer;
