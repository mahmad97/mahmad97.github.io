import { Sun, Moon, Monitor } from 'lucide-react';

import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
	const [theme, setTheme] = useTheme();

	const handleClick = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else if (theme === 'dark') {
			setTheme('system');
		} else {
			setTheme('light');
		}
	};

	const icon =
		theme === 'light' ? (
			<Sun className='w-5 h-5' strokeWidth={2.5} />
		) : theme === 'dark' ? (
			<Moon className='w-5 h-5' strokeWidth={2.5} />
		) : (
			<Monitor className='w-5 h-5' strokeWidth={2.5} />
		);
	return (
		<button
			onClick={handleClick}
			className='w-8 h-8 border flex items-center justify-center rounded-md border-slate-400 dark:border-slate-600 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-blue-500 transition-colors'>
			{icon}
		</button>
	);
};

export default ThemeToggle;
