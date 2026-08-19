import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';
import { buildLinks, buildMeta } from '@/utils/meta';

import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';

const PAGE = {
	title: 'Background',
	description:
		'Education and professional experience of Mohammad Ahmad, spanning UT San Antonio, Penn State, and The University of Hong Kong.',
	path: '/background',
};

const meta = () => buildMeta(PAGE);

const links = () => buildLinks(PAGE);

const Background = (): ReactElement => (
	<PageContainer heading='Background'>
		<EducationSection />
		<ExperienceSection />
	</PageContainer>
);

export { links, meta };
export default Background;
