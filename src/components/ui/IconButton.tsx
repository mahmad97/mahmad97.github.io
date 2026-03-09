import type { ReactElement, ReactNode } from 'react';

type IconButtonProps = Readonly<{
	children: ReactNode;
	title: string;
	href?: string;
	target?: string;
	rel?: string;
	onClick?: () => void;
	className?: string;
}>;

const iconButtonStyle =
	'relative w-9 h-9 border flex items-center justify-center rounded-md cursor-pointer border-slate-400 dark:border-slate-600 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-blue-500 transition-colors duration-200';

const IconButton = ({
	children,
	title,
	href,
	target,
	rel,
	onClick,
	className = '',
}: IconButtonProps): ReactElement =>
	href ? (
		<a
			href={href}
			title={title}
			aria-label={title}
			target={target}
			rel={rel}
			className={`${iconButtonStyle} ${className}`}>
			{children}
		</a>
	) : (
		<button
			type='button'
			title={title}
			aria-label={title}
			onClick={onClick}
			className={`${iconButtonStyle} ${className}`}>
			{children}
		</button>
	);

export default IconButton;
