import type { ReactElement } from 'react';

import { useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import { Link, NavLink } from 'react-router';

import Logo from '@/assets/logo.svg?react';
import ThemeToggle from '@/components/ui/ThemeToggle';

const navTextStyle =
	'text-lg font-normal [&.active]:font-bold [&.active]:text-blue-500 [&:not(.active)]:text-neutral-700 hover:[&:not(.active)]:text-neutral-800 dark:[&:not(.active)]:text-neutral-300 dark:hover:[&:not(.active)]:text-neutral-200';

const Header = (): ReactElement => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className='sticky top-0 border-b border-slate-400 dark:border-slate-600 backdrop-blur'>
			<div className='max-w-5xl h-16 mx-auto px-4 md:px-8 flex items-center justify-between'>
				<Link to='/' className='w-10 h-10 [&>svg]:w-full [&>svg]:h-full mr-8'>
					<Logo />
				</Link>

				<div className='hidden md:flex items-center'>
					<nav className='px-6 border-x flex gap-6 border-slate-400 dark:border-slate-600'>
						<NavLink to='/' className={navTextStyle}>
							Home
						</NavLink>
						<NavLink to='/publications' className={navTextStyle}>
							Publications
						</NavLink>
						<NavLink to='/awards' className={navTextStyle}>
							Awards
						</NavLink>
						<NavLink to='/background' className={navTextStyle}>
							Background
						</NavLink>
						<NavLink to='/people' className={navTextStyle}>
							People
						</NavLink>
					</nav>
				</div>

				<div className='flex gap-4 items-center ml-8'>
					<ThemeToggle />

					<button
						type='button'
						className='md:hidden cursor-pointer text-blue-500'
						aria-label={menuOpen ? 'Close menu' : 'Open menu'}
						onClick={() => setMenuOpen((prev) => !prev)}>
						{menuOpen ? (
							<LuX size={24} strokeWidth={2.5} />
						) : (
							<LuMenu size={24} strokeWidth={2.5} />
						)}
					</button>
				</div>
			</div>

			{menuOpen && (
				<nav className='md:hidden border-t border-slate-400 dark:border-slate-600 flex flex-col px-4 py-3 gap-2'>
					<NavLink
						to='/'
						className={navTextStyle}
						onClick={() => setMenuOpen(false)}>
						Home
					</NavLink>
					<NavLink
						to='/publications'
						className={navTextStyle}
						onClick={() => setMenuOpen(false)}>
						Publications
					</NavLink>
					<NavLink
						to='/background'
						className={navTextStyle}
						onClick={() => setMenuOpen(false)}>
						Background
					</NavLink>
					<NavLink
						to='/people'
						className={navTextStyle}
						onClick={() => setMenuOpen(false)}>
						People
					</NavLink>
					<NavLink
						to='/awards'
						className={navTextStyle}
						onClick={() => setMenuOpen(false)}>
						Awards
					</NavLink>
					<NavLink
						to='/about'
						className={navTextStyle}
						onClick={() => setMenuOpen(false)}>
						About
					</NavLink>
				</nav>
			)}
		</header>
	);
};

export default Header;
