import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';
import Timeline from '@/components/ui/Timeline';
import newsData from '@/data/news.json';
import { buildLinks, buildMeta } from '@/utils/meta';

const PAGE = {
	title: 'News',
	description:
		'Recent news and updates from Mohammad Ahmad — papers, talks, awards, and academic milestones.',
	path: '/news',
};

const meta = () => buildMeta(PAGE);

const links = () => buildLinks(PAGE);

const News = (): ReactElement => (
	<PageContainer heading='News'>
		<Timeline items={newsData} />
	</PageContainer>
);

export { links, meta };
export default News;
