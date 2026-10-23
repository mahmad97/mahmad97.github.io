import type { ReactElement } from 'react';

import { BaseText, SmallText } from '@/components/typography';
import { parseInlineLinks } from '@/utils/markdown';

type TimelineProps = Readonly<{
	items: ReadonlyArray<Readonly<{ date: string; description: string }>>;
}>;

const Timeline = ({ items }: TimelineProps): ReactElement => (
	<ul className='space-y-3'>
		{/* Keyed by index, not `date`: dates repeat in the data files, and the
		    lists are static so indices are stable. */}
		{items.map((item, i) => (
			<li key={i} className='flex gap-4'>
				<SmallText className='w-20 shrink-0 text-base font-medium'>
					{item.date}
				</SmallText>
				<BaseText>{parseInlineLinks(item.description)}</BaseText>
			</li>
		))}
	</ul>
);

export default Timeline;
