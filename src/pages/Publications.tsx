import type { ReactElement, ReactNode } from 'react';

import PageContainer from '@/components/layout/PageContainer';
import {
	BaseText,
	InlineLink,
	SmallText,
	XlText,
} from '@/components/typography';
import publicationsData from '@/data/publications.json';

const OWN_NAME = 'Mohammad Ahmad';

const formatAuthors = (authors: string[]): ReactNode =>
	authors.map((author, i) => (
		<span key={author}>
			{i > 0 && (i === authors.length - 1 ? ', and ' : ', ')}
			{author === OWN_NAME ? (
				<span className='font-semibold'>{author}</span>
			) : (
				author
			)}
		</span>
	));

const Publications = (): ReactElement => (
	<PageContainer heading='Publications'>
		<BaseText>
			For a full list of publications, please visit my{' '}
			<InlineLink href='https://scholar.google.com/citations?user=jg16MDkAAAAJ'>
				Google Scholar
			</InlineLink>{' '}
			profile.
		</BaseText>

		<ul className='flex flex-col gap-4'>
			{publicationsData.map((item) => (
				<li
					key={item.doi}
					className='p-4 border flex flex-col gap-3 rounded-xl border-slate-400 dark:border-slate-600'>
					<div className='flex items-start justify-between gap-4'>
						<div className='flex flex-col gap-1'>
							{item.url ? (
								<InlineLink href={item.url} className='text-xl font-medium'>
									{item.title}
								</InlineLink>
							) : (
								<XlText className='text-blue-500 dark:text-blue-500'>
									{item.title}
								</XlText>
							)}
							<BaseText className='text-neutral-500 dark:text-neutral-400'>
								{formatAuthors(item.authors)}
							</BaseText>
						</div>
						<SmallText className='shrink-0 text-base font-medium'>
							{item.year}
						</SmallText>
					</div>

					<BaseText>{item.venue}</BaseText>
				</li>
			))}
		</ul>
	</PageContainer>
);

export default Publications;
