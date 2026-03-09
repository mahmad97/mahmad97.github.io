import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';

import BiographySection from './BiographySection';
import NewsSection from './NewsSection';
import ProfileSection from './ProfileSection';
import ResearchInterestsSection from './ResearchInterestsSection';

const Home = (): ReactElement => (
	<PageContainer>
		<ProfileSection />
		<BiographySection />
		<ResearchInterestsSection />
		<NewsSection />
	</PageContainer>
);

export default Home;
