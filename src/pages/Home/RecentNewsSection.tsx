import type { ReactElement } from 'react';

import { BaseText, SmallText, Subheading } from '@/components/typography';
import newsData from '@/data/news.json';
import { parseInlineLinks } from '@/utils/markdown';

const currentYear = new Date().getFullYear();
const recentNews = newsData.filter((item) => {
	const year = parseInt(item.date.split(' ')[1]);
	return year >= currentYear - 4;
});

const RecentNewsSection = (): ReactElement => (
	<section className='flex flex-col gap-4'>
		<Subheading>Recent News</Subheading>

		<ul className='space-y-3'>
			{/* Keyed by index, not `date`: dates repeat in `news.json` (two
			    "Sep 2016" entries), and the list is static so indices are stable. */}
			{recentNews.map((item, i) => (
				<li key={i} className='flex gap-4'>
					<SmallText className='w-20 shrink-0 text-base font-medium'>
						{item.date}
					</SmallText>
					<BaseText>{parseInlineLinks(item.description)}</BaseText>
				</li>
			))}
		</ul>
	</section>
);

export default RecentNewsSection;
