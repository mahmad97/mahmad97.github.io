import type { ReactElement } from 'react';

import { LuX } from 'react-icons/lu';
import { Link } from 'react-router';

import Logo from '@/assets/logo.svg?react';
import Navigation from '@/components/layout/Navigation';

type SideDrawerProps = Readonly<{
	closeDrawer: () => void;
}>;

const SideDrawer = ({ closeDrawer }: SideDrawerProps): ReactElement => {
	return (
		<>
			<div
				className='md:hidden fixed inset-0 z-20 bg-black/20 dark:bg-black/40 transition-colors duration-200'
				onClick={closeDrawer}
			/>
			<aside className='fixed left-0 z-30 w-64 h-full px-4 py-3 border-r md:hidden flex flex-col border-slate-400 dark:border-slate-600 backdrop-blur transition-colors duration-200'>
				<div className='flex items-center justify-between pb-3 border-b border-slate-400 dark:border-slate-600 transition-colors duration-200'>
					<Link
						to='/'
						className='w-10 h-10 [&>svg]:w-full [&>svg]:h-full'
						onClick={closeDrawer}>
						<Logo />
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
