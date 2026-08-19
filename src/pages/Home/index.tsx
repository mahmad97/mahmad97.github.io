import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';
import { buildLinks, buildMeta } from '@/utils/meta';
import { personSchema } from '@/utils/structuredData';

import BiographySection from './BiographySection';
import NewsSection from './RecentNewsSection';
import ProfileSection from './ProfileSection';
import ResearchInterestsSection from './ResearchInterestsSection';

const PAGE = {
	description:
		'Mohammad Ahmad is a PhD student in Computer Science at The University of Texas at San Antonio, researching computer architecture, in-memory computing, and domain wall memory.',
	path: '/',
};

const meta = () => [...buildMeta(PAGE), { 'script:ld+json': personSchema }];

const links = () => buildLinks(PAGE);

const Home = (): ReactElement => (
	<PageContainer>
		<ProfileSection />
		<BiographySection />
		<ResearchInterestsSection />
		<NewsSection />
	</PageContainer>
);

export { links, meta };
export default Home;
