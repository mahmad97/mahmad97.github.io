/* eslint-disable react-refresh/only-export-components */
// Exporting style constants alongside components for design token reusability
import type { ReactElement, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

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
	'text-3xl font-semibold text-neutral-800 dark:text-neutral-200';

const subsubheadingTextStyle =
	'text-2xl font-semibold text-neutral-800 dark:text-neutral-200';

const xlTextStyle =
	'text-xl font-medium text-neutral-800 dark:text-neutral-200';

const baseTextStyle =
	'text-base font-normal text-neutral-800 dark:text-neutral-200';

const smallTextStyle =
	'text-sm font-normal text-neutral-600 dark:text-neutral-400';

const inlineLinkTextStyle = 'text-blue-500 dark:text-blue-500 hover:underline';

const navHeadingStyle =
	'text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400';

const navTextStyle =
	'text-base font-normal [&.active]:font-bold pl-3 border-l -ml-px border-transparent [&.active]:border-blue-500 hover:[&:not(.active)]:border-neutral-800 dark:hover:[&:not(.active)]:border-neutral-200 [&.active]:text-blue-500 [&:not(.active)]:text-neutral-700 hover:[&:not(.active)]:text-neutral-800 dark:[&:not(.active)]:text-neutral-300 dark:hover:[&:not(.active)]:text-neutral-200';

// const labelTextStyle =
// 	'text-base font-bold text-slate-800 dark:text-slate-300';

// const inputTextStyle =
// 	'text-base font-normal text-neutral-700 dark:text-neutral-300';

// const errorTextStyle = 'text-xs font-medium text-red-500';

// const buttonTextStyle = 'text-base font-bold text-neutral-100';

const Heading = ({ children, className }: TypographyProps): ReactElement => (
	<h1 className={twMerge('inline-block', headingTextStyle, className)}>
		{children}
	</h1>
);

const Subheading = ({ children, className }: TypographyProps): ReactElement => (
	<h2 className={twMerge('block', subheadingTextStyle, className)}>
		{children}
	</h2>
);

const Subsubheading = ({
	children,
	className,
}: TypographyProps): ReactElement => (
	<h3 className={twMerge('block', subsubheadingTextStyle, className)}>
		{children}
	</h3>
);

const XlText = ({ children, className }: TypographyProps): ReactElement => (
	<h4 className={twMerge('block', xlTextStyle, className)}>{children}</h4>
);

const BaseText = ({ children, className }: TypographyProps): ReactElement => (
	<p className={twMerge('block', baseTextStyle, className)}>{children}</p>
);

const SmallText = ({ children, className }: TypographyProps): ReactElement => (
	<span className={twMerge('inline-block', smallTextStyle, className)}>
		{children}
	</span>
);

const InlineLink = ({ children, href, className }: LinkProps): ReactElement => (
	<a
		href={href}
		target='_blank'
		rel='noopener noreferrer'
		className={twMerge(inlineLinkTextStyle, className)}>
		{children}
	</a>
);

export {
	headingTextStyle,
	subheadingTextStyle,
	subsubheadingTextStyle,
	xlTextStyle,
	navHeadingStyle,
	navTextStyle,
	baseTextStyle,
	smallTextStyle,
	inlineLinkTextStyle,
	Heading,
	Subheading,
	Subsubheading,
	XlText,
	BaseText,
	SmallText,
	InlineLink,
};
