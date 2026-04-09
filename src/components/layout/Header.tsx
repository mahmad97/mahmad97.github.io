import type { ReactElement } from 'react';

import { LuMenu } from 'react-icons/lu';
import { Link } from 'react-router';

import Logo from '@/assets/logos/MA.svg?react';
import ThemeToggle from '@/components/ui/ThemeToggle';

type HeaderProps = Readonly<{
	onMenuClick: () => void;
}>;

const Header = ({ onMenuClick }: HeaderProps): ReactElement => (
	<header className='sticky top-0 z-10 border-b md:hidden border-slate-400 dark:border-slate-600 backdrop-blur'>
		<div className='h-16 px-4 flex items-center justify-between'>
			<Link to='/' className='w-10 h-10 [&>svg]:w-full [&>svg]:h-full'>
				<Logo />
			</Link>

			<div className='flex gap-4 items-center'>
				<ThemeToggle />
				<button
					type='button'
					className='cursor-pointer text-blue-500'
					aria-label='Open menu'
					onClick={onMenuClick}>
					<LuMenu size={24} strokeWidth={2.5} />
				</button>
			</div>
		</div>
	</header>
);

export default Header;
