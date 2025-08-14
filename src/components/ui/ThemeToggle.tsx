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

	const buttonText =
		theme === 'light' ? 'Light' : theme === 'dark' ? 'Dark' : 'System';

	return <button onClick={handleClick}>{buttonText}</button>;
};

export default ThemeToggle;
