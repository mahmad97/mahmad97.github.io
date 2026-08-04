import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';
import { buildMeta } from '@/utils/meta';

// import CommitteeSection from './CommitteeSection';
import ReviewerSection from './ReviewerSection';

const meta = () =>
	buildMeta({
		title: 'Services',
		description:
			'Academic service by Mohammad Ahmad, including peer review for conferences and symposia.',
		path: '/services',
	});

const Services = (): ReactElement => (
	<PageContainer heading='Services'>
		{/* <CommitteeSection /> */}
		<ReviewerSection />
	</PageContainer>
);

export { meta };
export default Services;
