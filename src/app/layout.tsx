import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { eb_garamond, inter, roboto_mono } from './fonts';
import './globals.css';

type RootLayoutProps = Readonly<{
	children: ReactNode;
}>;

const metadata: Metadata = {
	title: 'Mohammad Ahmad',
	description: "Mohammad's personal website",
};

const RootLayout = (props: RootLayoutProps) => {
	return (
		<html
			lang='en'
			className={`${eb_garamond.variable} ${inter.variable} ${roboto_mono.variable}`}>
			<body>{props.children}</body>
		</html>
	);
};

export default RootLayout;
export { metadata };
