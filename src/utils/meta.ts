import type { MetaDescriptor } from 'react-router';

const SITE_NAME = 'Mohammad Ahmad';
const SITE_URL = 'https://mahmad.dev';

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
		{ property: 'og:url', content: `${SITE_URL}${path}` },
		{ name: 'twitter:card', content: 'summary' },
		{ name: 'twitter:title', content: fullTitle },
		{ name: 'twitter:description', content: description },
	];
};

export { buildMeta, SITE_NAME, SITE_URL };
