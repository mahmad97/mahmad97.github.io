import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';
import { buildMeta } from '@/utils/meta';

import BiographySection from './BiographySection';
import NewsSection from './RecentNewsSection';
import ProfileSection from './ProfileSection';
import ResearchInterestsSection from './ResearchInterestsSection';

const meta = () =>
	buildMeta({
		description:
			'Mohammad Ahmad is a PhD student in Computer Science at The University of Texas at San Antonio, researching computer architecture, in-memory computing, and domain wall memory.',
		path: '/',
	});

const Home = (): ReactElement => (
	<PageContainer>
		<ProfileSection />
		<BiographySection />
		<ResearchInterestsSection />
		<NewsSection />
	</PageContainer>
);

export { meta };
export default Home;
