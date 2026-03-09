/* eslint-disable react-refresh/only-export-components */
// Exporting style constants alongside components for design token reusability
import type { ReactElement, ReactNode } from 'react';

type TypographyProps = Readonly<{
	children: ReactNode;
	className?: string;
}>;

type LinkProps = Readonly<{
	children: ReactNode;
	href: string;
	className?: string;
}>;

const headingTextStyle =
	'text-4xl font-semibold text-neutral-800 dark:text-neutral-200';

const subheadingTextStyle =
	'text-2xl font-semibold text-neutral-800 dark:text-neutral-200';

const xlTextStyle =
	'text-xl font-normal text-neutral-800 dark:text-neutral-200';

const baseTextStyle =
	'text-base font-normal text-neutral-800 dark:text-neutral-200';

const smallTextStyle =
	'text-xs font-normal text-neutral-600 dark:text-neutral-400';

const inlineLinkTextStyle = 'text-blue-500 hover:underline';

const smallLinkTextStyle = 'text-xs font-normal text-blue-500 hover:underline';

const labelTextStyle = 'text-base font-bold text-gray-800 dark:text-gray-300';

const inputTextStyle =
	'text-base font-normal text-neutral-700 dark:text-neutral-300';

const errorTextStyle = 'text-xs font-medium text-red-500';

const buttonTextStyle = 'text-base font-bold text-neutral-100';

const Heading = ({
	children,
	className = '',
}: TypographyProps): ReactElement => (
	<h1 className={`inline-block ${headingTextStyle} ${className}`}>
		{children}
	</h1>
);

const Subheading = ({
	children,
	className = '',
}: TypographyProps): ReactElement => (
	<h2 className={`block ${subheadingTextStyle} ${className}`}>{children}</h2>
);

const XlText = ({
	children,
	className = '',
}: TypographyProps): ReactElement => (
	<p className={`inline-block ${xlTextStyle} ${className}`}>{children}</p>
);

const BaseText = ({
	children,
	className = '',
}: TypographyProps): ReactElement => (
	<p className={`block ${baseTextStyle} ${className}`}>{children}</p>
);

const SmallText = ({
	children,
	className = '',
}: TypographyProps): ReactElement => (
	<span className={`inline-block ${smallTextStyle} ${className}`}>
		{children}
	</span>
);

const InlineLink = ({
	children,
	href,
	className = '',
}: LinkProps): ReactElement => (
	<a
		href={href}
		target='_blank'
		rel='noopener noreferrer'
		className={`${inlineLinkTextStyle} ${className}`}>
		{children}
	</a>
);

const SmallLinkText = ({
	children,
	className = '',
}: TypographyProps): ReactElement => (
	<a className={`inline-block ${smallLinkTextStyle} ${className}`}>
		{children}
	</a>
);

const ErrorText = ({
	children,
	className = '',
}: TypographyProps): ReactElement => (
	<p className={`inline-block ${errorTextStyle} ${className}`}>{children}</p>
);

export {
	headingTextStyle,
	subheadingTextStyle,
	xlTextStyle,
	baseTextStyle,
	smallTextStyle,
	smallLinkTextStyle,
	labelTextStyle,
	inputTextStyle,
	errorTextStyle,
	buttonTextStyle,
	Heading,
	Subheading,
	XlText,
	BaseText,
	InlineLink,
	SmallText,
	SmallLinkText,
	ErrorText,
};
