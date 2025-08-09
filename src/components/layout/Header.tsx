const Header = () => {
	return (
		<header>
			<a href='/'>
				<span role='img' aria-label='Home'>
					🏠
				</span>{' '}
				Mahmad Ahmad
			</a>
			<nav>
				<ul>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#projects'>Projects</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
