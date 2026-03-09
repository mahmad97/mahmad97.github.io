import type { ReactElement, ReactNode } from 'react';

type IconButtonProps = Readonly<{
	children: ReactNode;
	title: string;
	href?: string;
	target?: string;
	rel?: string;
	onClick?: () => void;
}>;

const iconButtonStyle =
	'relative w-9 h-9 border flex items-center justify-center rounded-md border-slate-500 dark:border-slate-600 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-blue-500 transition-colors duration-300';

const IconButton = ({
	children,
	title,
	href,
	target,
	rel,
	onClick,
}: IconButtonProps): ReactElement =>
	href ? (
		<a
			href={href}
			title={title}
			aria-label={title}
			target={target}
			rel={rel}
			className={iconButtonStyle}>
			{children}
		</a>
	) : (
		<button
			type='button'
			title={title}
			aria-label={title}
			onClick={onClick}
			className={iconButtonStyle}>
			{children}
		</button>
	);

export default IconButton;
