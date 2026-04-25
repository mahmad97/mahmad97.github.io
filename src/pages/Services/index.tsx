import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';

// import CommitteeSection from './CommitteeSection';
import ReviewerSection from './ReviewerSection';

const Services = (): ReactElement => (
	<PageContainer heading='Services'>
		{/* <CommitteeSection /> */}
		<ReviewerSection />
	</PageContainer>
);

export default Services;
