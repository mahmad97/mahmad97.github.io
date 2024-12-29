import { EB_Garamond, Inter, Roboto_Mono } from 'next/font/google';

const eb_garamond = EB_Garamond({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-eb-garamond',
});

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto-mono',
});

export { eb_garamond, inter, roboto_mono };
