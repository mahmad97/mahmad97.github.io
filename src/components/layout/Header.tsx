import { Link } from '@tanstack/react-router';

import ThemeToggle from '../ui/ThemeToggle';

const Header = () => {
	return (
		<header className='flex h-14 px-8 border-b items-center justify-between'>
			<Link to='/' className='flex gap-4'>
				<div className=''>👤</div>
				<p className='text-xl'>Mohammad Ahmad</p>
			</Link>

			<div className='flex gap-4'>
				<div>Search</div>

				<div className='border-l'></div>

				<nav className='flex gap-4'>
					<Link to='/' className='[&.active]:font-bold'>
						Home
					</Link>
					<Link to='/about' className='[&.active]:font-bold'>
						About
					</Link>
					<Link to='/research' className='[&.active]:font-bold'>
						Research
					</Link>
					{/* <Link to='/blog' className='[&.active]:font-bold'>
						Blog
					</Link> */}
				</nav>

				<div className='border-l'></div>

				<ThemeToggle />
			</div>
		</header>
	);
};

export default Header;
