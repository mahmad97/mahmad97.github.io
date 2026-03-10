import type { ReactElement, ReactNode } from 'react';

import { BaseText, InlineLink, Subheading } from '@/components/typography';
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

const currentYear = new Date().getFullYear();
const recentNews = newsData.filter((item) => {
	const year = parseInt(item.date.split(' ')[1]);
	return year >= currentYear - 2;
});

const NewsSection = (): ReactElement => (
	<div>
		<Subheading className='mb-4'>News</Subheading>
		<ul className='space-y-3'>
			{recentNews.map((item) => (
				<li key={item.date} className='flex gap-4'>
					<span className=' w-20 shrink-0 text-base font-medium text-neutral-500 dark:text-neutral-400 transition-colors duration-200'>
						{item.date}
					</span>
					<BaseText>{parseText(item.text)}</BaseText>
				</li>
			))}
		</ul>
	</div>
);

export default NewsSection;
