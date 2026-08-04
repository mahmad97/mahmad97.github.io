import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';
import { BaseText, SmallText } from '@/components/typography';
import newsData from '@/data/news.json';
import { parseInlineLinks } from '@/utils/markdown';
import { buildMeta } from '@/utils/meta';

const meta = () =>
	buildMeta({
		title: 'News',
		description:
			'Recent news and updates from Mohammad Ahmad — papers, talks, awards, and academic milestones.',
		path: '/news',
	});

const News = (): ReactElement => (
	<PageContainer heading='News'>
		<ul className='space-y-3'>
			{newsData.map((item, i) => (
				<li key={i} className='flex gap-4'>
					<SmallText className='w-20 shrink-0 text-base font-medium'>
						{item.date}
					</SmallText>
					<BaseText>{parseInlineLinks(item.description)}</BaseText>
				</li>
			))}
		</ul>
	</PageContainer>
);

export { meta };
export default News;
