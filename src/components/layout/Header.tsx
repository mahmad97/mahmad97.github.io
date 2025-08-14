import { Link } from '@tanstack/react-router';

import ThemeToggle from '../ui/ThemeToggle';

const Header = () => {
	const navTextStyle =
		'text-base font-normal [&.active]:font-bold text-gray-800 dark:text-gray-200';

	return (
		<header className='flex h-14 px-8 border-b items-center justify-between border-slate-400 dark:border-slate-600 backdrop-blur'>
			<Link to='/' className='flex gap-4'>
				<div className=''>👤</div>
				<p className='text-xl'>Mohammad Ahmad</p>
			</Link>

			<div className='flex gap-4 items-center'>
				<div>Search</div>

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

				<ThemeToggle />
			</div>
		</header>
	);
};

export default Header;
