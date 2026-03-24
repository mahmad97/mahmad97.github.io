import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';

import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';

const Background = (): ReactElement => (
	<PageContainer heading='Background'>
		<EducationSection />
		<ExperienceSection />
	</PageContainer>
);

export default Background;
