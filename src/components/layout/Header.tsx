import type { ReactElement } from 'react';

import { Link } from 'react-router';

import ThemeToggle from '../ui/ThemeToggle';
// @ts-expect-error svg import
import Logo from '../../assets/logo.svg?react';

const Header = (): ReactElement => {
	const navTextStyle =
		'text-base font-normal [&.active]:font-bold text-gray-800 dark:text-gray-200';

	return (
		<header className='border-b border-slate-400 dark:border-slate-600 backdrop-blur'>
			<div className='max-w-7xl h-16 mx-auto px-8 flex items-center justify-between'>
				<Link to='/'>
					<Logo style={{ width: '3rem', height: '3rem' }} />
				</Link>

				<div className='flex gap-4 items-center'>
					<nav className='px-4 border-x flex gap-4 border-slate-400 dark:border-slate-600'>
						<Link to='/' className={navTextStyle}>
							Home
						</Link>
						<Link to='/about' className={navTextStyle}>
							About
						</Link>
						<Link to='/research' className={navTextStyle}>
							Research
						</Link>
						{/* <Link to='/blog' className='[&.active]:font-bold'>
						Blog
					</Link> */}
					</nav>
				</div>

				<div className='flex gap-4 items-center'>
					<div>Search</div>
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
};

export default Header;
