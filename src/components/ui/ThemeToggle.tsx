import type { ReactElement } from 'react';

import { useRef, useState } from 'react';
import { LuMonitor, LuMoonStar, LuSun } from 'react-icons/lu';

import IconButton from '@/components/ui/IconButton';
import { useTheme } from '@/hooks/useTheme';

import './ThemeToggle.css';

const getIcon = (mode: string): ReactElement => {
	switch (mode) {
		case 'light':
			return <LuSun size={24} strokeWidth={2.5} />;
		case 'dark':
			return <LuMoonStar size={24} strokeWidth={2.5} />;
		default:
			return <LuMonitor size={24} strokeWidth={2.5} />;
	}
};

const ThemeToggle = (): ReactElement => {
	const [theme, setTheme] = useTheme();
	const prevThemeRef = useRef(theme);
	const [animating, setAnimating] = useState(false);

	const handleClick = (): void => {
		prevThemeRef.current = theme;
		setAnimating(true);

		if (theme === 'light') {
			setTheme('dark');
		} else if (theme === 'dark') {
			setTheme('system');
		} else {
			setTheme('light');
		}
	};

	return (
		<IconButton
			title='Toggle theme'
			onClick={handleClick}
			className='overflow-hidden'>
			{animating && (
				<span
					className='absolute'
					style={{ animation: 'slideOut 0.25s forwards' }}
					onAnimationEnd={() => setAnimating(false)}>
					{getIcon(prevThemeRef.current)}
				</span>
			)}

			<span
				className='absolute'
				style={animating ? { animation: 'slideIn 0.25s forwards' } : {}}>
				{getIcon(theme)}
			</span>
		</IconButton>
	);
};

export default ThemeToggle;
