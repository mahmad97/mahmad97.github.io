import type { ReactElement, ReactNode } from 'react';

import PageContainer from '@/components/layout/PageContainer';
import { BaseText, InlineLink, SmallText } from '@/components/typography';
import newsData from '@/data/news.json';

const parseText = (text: string): ReactNode => {
	const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

	return parts.map((part, i) => {
		const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);

		if (match) {
			return (
				<InlineLink key={i} href={match[2]}>
					{match[1]}
				</InlineLink>
			);
		}

		return part;
	});
};

const News = (): ReactElement => (
	<PageContainer heading='News'>
		<ul className='space-y-3'>
			{newsData.map((item, i) => (
				<li key={i} className='flex gap-4'>
					<SmallText className='w-20 shrink-0 text-base font-medium'>
						{item.date}
					</SmallText>
					<BaseText>{parseText(item.description)}</BaseText>
				</li>
			))}
		</ul>
	</PageContainer>
);

export default News;
