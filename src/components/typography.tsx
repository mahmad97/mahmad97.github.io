/* eslint-disable react-refresh/only-export-components */
// Exporting style constants alongside components for design token reusability
import type { ReactElement, ReactNode } from 'react';

type TypographyProps = Readonly<{
	children: ReactNode;
	className?: string;
}>;

const headingTextStyle =
	'text-4xl font-semibold text-neutral-800 dark:text-neutral-200';

const subheadingTextStyle =
	'text-2xl font-medium text-neutral-800 dark:text-neutral-200';

const xlTextStyle =
	'text-xl font-normal text-neutral-800 dark:text-neutral-200';

const smallTextStyle =
	'text-xs font-normal text-neutral-600 dark:text-neutral-400';

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
	<h2 className={`inline-block ${subheadingTextStyle} ${className}`}>
		{children}
	</h2>
);

const XlText = ({
	children,
	className = '',
}: TypographyProps): ReactElement => (
	<p className={`inline-block ${xlTextStyle} ${className}`}>{children}</p>
);

const SmallText = ({
	children,
	className = '',
}: TypographyProps): ReactElement => (
	<span className={`inline-block ${smallTextStyle} ${className}`}>
		{children}
	</span>
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
	smallTextStyle,
	smallLinkTextStyle,
	labelTextStyle,
	inputTextStyle,
	errorTextStyle,
	buttonTextStyle,
	Heading,
	Subheading,
	XlText,
	SmallText,
	SmallLinkText,
	ErrorText,
};
