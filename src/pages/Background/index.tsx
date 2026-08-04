import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';
import { buildMeta } from '@/utils/meta';

import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';

const meta = () =>
	buildMeta({
		title: 'Background',
		description:
			'Education and professional experience of Mohammad Ahmad, spanning UT San Antonio, Penn State, and The University of Hong Kong.',
		path: '/background',
	});

const Background = (): ReactElement => (
	<PageContainer heading='Background'>
		<EducationSection />
		<ExperienceSection />
	</PageContainer>
);

export { meta };
export default Background;
