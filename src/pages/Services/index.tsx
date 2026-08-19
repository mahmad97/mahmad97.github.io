import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';
import { buildLinks, buildMeta } from '@/utils/meta';

// import CommitteeSection from './CommitteeSection';
import ReviewerSection from './ReviewerSection';

const PAGE = {
	title: 'Services',
	description:
		'Academic service by Mohammad Ahmad, including peer review for conferences and symposia.',
	path: '/services',
};

const meta = () => buildMeta(PAGE);

const links = () => buildLinks(PAGE);

const Services = (): ReactElement => (
	<PageContainer heading='Services'>
		{/* <CommitteeSection /> */}
		<ReviewerSection />
	</PageContainer>
);

export { links, meta };
export default Services;
