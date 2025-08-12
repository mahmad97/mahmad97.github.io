import { Link } from '@tanstack/react-router';

const Header = () => {
	return (
		<header className='flex h-14 px-6 items-center justify-between'>
			<Link to='/' className='flex gap-2'>
				<div className=''>👤</div>
				<p className='text-xl'>Mohammad Ahmad</p>
			</Link>

			<div className='flex gap-6'>
				<div>Search</div>

				<nav className='flex gap-2'>
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

				<div>
					<p>Day/night mode</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
