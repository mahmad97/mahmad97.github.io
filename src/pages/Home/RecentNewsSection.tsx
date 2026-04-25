import type { ReactElement, ReactNode } from 'react';

import {
	BaseText,
	InlineLink,
	SmallText,
	Subheading,
} from '@/components/typography';
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
	return year >= currentYear - 4;
});

const RecentNewsSection = (): ReactElement => (
	<section className='flex flex-col gap-4'>
		<Subheading>Recent News</Subheading>

		<ul className='space-y-3'>
			{recentNews.map((item) => (
				<li key={item.date} className='flex gap-4'>
					<SmallText className='w-20 shrink-0 text-base font-medium'>
						{item.date}
					</SmallText>
					<BaseText>{parseText(item.description)}</BaseText>
				</li>
			))}
		</ul>
	</section>
);

export default RecentNewsSection;
