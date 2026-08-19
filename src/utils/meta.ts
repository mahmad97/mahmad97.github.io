import type { LinkDescriptor, MetaDescriptor } from 'react-router';

const SITE_NAME = 'Mohammad Ahmad';
const SITE_URL = 'https://mahmad.dev';

const OG_IMAGE = {
	url: `${SITE_URL}/og-image.png`,
	width: '1200',
	height: '630',
	alt: 'Mohammad Ahmad — PhD Student in Computer Science at The University of Texas at San Antonio',
};

// GitHub Pages serves every pre-rendered route from its own directory and
// redirects `/news` to `/news/`, so the trailing-slash form is the URL that
// answers 200. Canonical tags, `og:url`, and the sitemap all have to use it.
const pageUrl = (path: string): string =>
	`${SITE_URL}${path.endsWith('/') ? path : `${path}/`}`;

type PageMeta = Readonly<{
	title?: string;
	description: string;
	path: string;
}>;

const buildMeta = ({
	title,
	description,
	path,
}: PageMeta): MetaDescriptor[] => {
	const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

	return [
		{ title: fullTitle },
		{ name: 'description', content: description },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:site_name', content: SITE_NAME },
		{ property: 'og:title', content: fullTitle },
		{ property: 'og:description', content: description },
		{ property: 'og:url', content: pageUrl(path) },
		{ property: 'og:image', content: OG_IMAGE.url },
		{ property: 'og:image:width', content: OG_IMAGE.width },
		{ property: 'og:image:height', content: OG_IMAGE.height },
		{ property: 'og:image:alt', content: OG_IMAGE.alt },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:title', content: fullTitle },
		{ name: 'twitter:description', content: description },
		{ name: 'twitter:image', content: OG_IMAGE.url },
		{ name: 'twitter:image:alt', content: OG_IMAGE.alt },
	];
};

const buildLinks = ({ path }: Pick<PageMeta, 'path'>): LinkDescriptor[] => [
	{ rel: 'canonical', href: pageUrl(path) },
];

// GitHub Pages answers every unmatched URL with `404.html`, which is the app
// shell rendered without a leaf route — so both `root.tsx` and `NotFound.tsx`
// describe the same page and share these tags.
const NOT_FOUND_META: MetaDescriptor[] = [
	...buildMeta({
		title: 'Page not found',
		description: 'The requested page could not be found.',
		path: '/404',
	}),
	{ name: 'robots', content: 'noindex' },
];

export {
	buildLinks,
	buildMeta,
	NOT_FOUND_META,
	OG_IMAGE,
	pageUrl,
	SITE_NAME,
	SITE_URL,
};
