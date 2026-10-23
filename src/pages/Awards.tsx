import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';
import Timeline from '@/components/ui/Timeline';
import awardsData from '@/data/awards.json';
import { buildLinks, buildMeta } from '@/utils/meta';

const PAGE = {
	title: 'Awards',
	description: 'Awards, scholarships, and honours received by Mohammad Ahmad.',
	path: '/awards',
};

const meta = () => buildMeta(PAGE);

const links = () => buildLinks(PAGE);

const Awards = (): ReactElement => (
	<PageContainer heading='Awards'>
		<Timeline items={awardsData} />
	</PageContainer>
);

export { links, meta };
export default Awards;
