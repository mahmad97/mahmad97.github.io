import type { ReactElement } from 'react';

import { useState } from 'react';
import { LuMonitor, LuMoonStar, LuSun } from 'react-icons/lu';

import IconButton from '@/components/ui/IconButton';
import type { Theme } from '@/hooks/useTheme';
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
	const [exitingTheme, setExitingTheme] = useState<Theme | null>(null);

	const handleClick = (): void => {
		setExitingTheme(theme);

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
			{exitingTheme && (
				<span
					className='absolute'
					style={{ animation: 'slideOut 0.25s forwards' }}
					onAnimationEnd={() => setExitingTheme(null)}>
					{getIcon(exitingTheme)}
				</span>
			)}

			<span
				className='absolute'
				style={exitingTheme ? { animation: 'slideIn 0.25s forwards' } : {}}>
				{getIcon(theme)}
			</span>
		</IconButton>
	);
};

export default ThemeToggle;
