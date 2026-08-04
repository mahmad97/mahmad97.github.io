import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';
import { BaseText, SmallText } from '@/components/typography';
import awardsData from '@/data/awards.json';
import { parseInlineLinks } from '@/utils/markdown';
import { buildMeta } from '@/utils/meta';

const meta = () =>
	buildMeta({
		title: 'Awards',
		description:
			'Awards, scholarships, and honours received by Mohammad Ahmad.',
		path: '/awards',
	});

const Awards = (): ReactElement => (
	<PageContainer heading='Awards'>
		<ul className='space-y-3'>
			{awardsData.map((item, i) => (
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
export default Awards;
