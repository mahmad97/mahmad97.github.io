import type { ReactElement } from 'react';

import { Sun, Moon, Monitor } from 'lucide-react';
import { useState } from 'react';

import { useTheme } from '../../hooks/useTheme';

import './ThemeToggle.css';

const ThemeToggle = (): ReactElement => {
	const [theme, setTheme] = useTheme();
	const [prevTheme, setPrevTheme] = useState(theme);
	const [animating, setAnimating] = useState(false);

	const handleClick = (): void => {
		setPrevTheme(theme);
		setAnimating(true);

		if (theme === 'light') {
			setTheme('dark');
		} else if (theme === 'dark') {
			setTheme('system');
		} else {
			setTheme('light');
		}
	};

	const getIcon = (mode: string): ReactElement => {
		switch (mode) {
			case 'light':
				return <Sun className='w-5 h-5' strokeWidth={2.5} />;
			case 'dark':
				return <Moon className='w-5 h-5' strokeWidth={2.5} />;
			default:
				return <Monitor className='w-5 h-5' strokeWidth={2.5} />;
		}
	};

	return (
		<button
			onClick={handleClick}
			className='relative w-8 h-8 border flex items-center justify-center cursor-pointer rounded-md border-slate-400 dark:border-slate-600 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-blue-500 transition-colors overflow-hidden'>
			{animating && (
				<span
					className='absolute inset-0 flex items-center justify-center'
					style={{ animation: 'slideOut 0.25s forwards' }}
					onAnimationEnd={() => setAnimating(false)}>
					{getIcon(prevTheme)}
				</span>
			)}

			<span
				className='absolute inset-0 flex items-center justify-center'
				style={animating ? { animation: 'slideIn 0.25s forwards' } : {}}>
				{getIcon(theme)}
			</span>
		</button>
	);
};

export default ThemeToggle;
