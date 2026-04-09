import type { ReactElement, ReactNode } from 'react';

type ButtonProps = Readonly<{
	children: ReactNode;
	href?: string;
	target?: string;
	rel?: string;
	onClick?: () => void;
}>;

const buttonStyle =
	'px-4 py-2 border inline-flex items-center gap-2 rounded-md cursor-pointer border-blue-500 hover:border-blue-600 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:border-blue-600 dark:hover:border-blue-700 text-neutral-100 font-medium';

const Button = ({
	children,
	href,
	target,
	rel,
	onClick,
}: ButtonProps): ReactElement =>
	href ? (
		<a href={href} target={target} rel={rel} className={buttonStyle}>
			{children}
		</a>
	) : (
		<button type='button' onClick={onClick} className={buttonStyle}>
			{children}
		</button>
	);

export default Button;
