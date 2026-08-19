import backgroundData from '@/data/background.json';
import publicationsData from '@/data/publications.json';
import researchInterests from '@/data/researchInterests.json';
import { OG_IMAGE, pageUrl, SITE_NAME, SITE_URL } from '@/utils/meta';

// Anything that needs to point at the person — an article's author, a future
// page's `mainEntity` — references this node instead of repeating it.
const PERSON_ID = `${SITE_URL}/#person`;

const ORCID = '0009-0005-9923-7490';

const profiles = [
	'https://github.com/mahmad97',
	'https://www.linkedin.com/in/mahmad97/',
	'https://scholar.google.com/citations?user=jg16MDkAAAAJ',
	`https://orcid.org/${ORCID}`,
];

// A degree in progress isn't an `alumniOf` claim yet.
const completedDegrees = backgroundData.education.filter(
	({ period }) => !period.includes('Present'),
);

const personSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	'@id': PERSON_ID,
	name: SITE_NAME,
	url: pageUrl('/'),
	image: OG_IMAGE.url,
	jobTitle: 'PhD Student in Computer Science',
	affiliation: {
		'@type': 'CollegeOrUniversity',
		name: 'The University of Texas at San Antonio',
		url: 'https://www.utsa.edu/',
	},
	alumniOf: completedDegrees.map(({ institution }) => ({
		'@type': 'CollegeOrUniversity',
		name: institution,
	})),
	knowsAbout: researchInterests,
	identifier: {
		'@type': 'PropertyValue',
		propertyID: 'ORCID',
		value: ORCID,
	},
	sameAs: profiles,
};

const publicationSchemas = publicationsData.map(
	({ title, authors, venue, year, doi, url }) => ({
		'@context': 'https://schema.org',
		'@type': 'ScholarlyArticle',
		'@id': `https://doi.org/${doi}`,
		name: title,
		headline: title,
		author: authors.map((name) =>
			name === SITE_NAME
				? { '@type': 'Person', '@id': PERSON_ID, name }
				: { '@type': 'Person', name },
		),
		datePublished: year,
		isPartOf: { '@type': 'Periodical', name: venue },
		identifier: {
			'@type': 'PropertyValue',
			propertyID: 'DOI',
			value: doi,
		},
		// Until a paper is indexed, the DOI resolver is the stable link.
		url: url || `https://doi.org/${doi}`,
	}),
);

export { personSchema, publicationSchemas };
