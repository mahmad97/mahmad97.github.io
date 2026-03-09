import type { ReactElement, ReactNode } from 'react';

import { BaseText, InlineLink, Subheading } from '@/components/typography';

type NewsItem = Readonly<{ date: string; text: ReactNode }>;

const newsItems: NewsItem[] = [
	{
		date: 'Jan 2025',
		text: (
			<>
				Started PhD in Computer Science at{' '}
				<InlineLink href='https://www.utsa.edu/'>UTSA</InlineLink>, advised by{' '}
				<InlineLink href='https://sites.google.com/view/mxie'>
					Dr. Mimi Xie
				</InlineLink>
				.
			</>
		),
	},
];

const NewsSection = (): ReactElement => (
	<div>
		<Subheading className='mb-4'>News</Subheading>
		<ul className='space-y-3'>
			{newsItems.map((item) => (
				<li key={item.date} className='flex gap-4'>
					<span className='text-base font-medium text-neutral-500 dark:text-neutral-400 shrink-0 w-20'>
						{item.date}
					</span>
					<BaseText>{item.text}</BaseText>
				</li>
			))}
		</ul>
	</div>
);

export default NewsSection;
