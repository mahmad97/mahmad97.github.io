import type { ReactElement, ReactNode } from 'react';

type ButtonProps = Readonly<{
	children: ReactNode;
	href?: string;
	target?: string;
	rel?: string;
	onClick?: () => void;
}>;

const buttonStyle =
	'p-2 border inline-flex items-center gap-2 rounded-md border-blue-500 hover:border-blue-600 bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium transition-colors duration-300';

const Button = ({
	children,
	href,
	target,
	rel,
	onClick,
}: ButtonProps): ReactElement =>
	href ? (
		<a
			href={href}
			target={target}
			rel={rel}
			className={buttonStyle}>
			{children}
		</a>
	) : (
		<button
			type='button'
			onClick={onClick}
			className={buttonStyle}>
			{children}
		</button>
	);

export default Button;
