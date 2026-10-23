import type { ReactElement } from 'react';

import { Subheading } from '@/components/typography';
import Timeline from '@/components/ui/Timeline';
import newsData from '@/data/news.json';
import { BUILD_YEAR } from '@/utils/buildDate';

const recentNews = newsData.filter((item) => {
	const year = parseInt(item.date.split(' ')[1]);
	return year >= BUILD_YEAR - 4;
});

const RecentNewsSection = (): ReactElement => (
	<section className='flex flex-col gap-4'>
		<Subheading>Recent News</Subheading>

		<Timeline items={recentNews} />
	</section>
);

export default RecentNewsSection;
