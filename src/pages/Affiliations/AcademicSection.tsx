import type { ReactElement } from 'react';

import { InlineLink, SmallText, Subheading } from '@/components/typography';
import data from '@/data/affiliations.json';

const AcademicSection = (): ReactElement => (
	<section className='flex flex-col gap-3'>
		<Subheading>Academic</Subheading>
		<ul className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
			{data.academic.map((item) => (
				<li
					key={item.institution}
					className='flex flex-col items-center gap-3 rounded-xl border border-slate-400 dark:border-slate-600 p-4 text-center transition-colors duration-200'>
					{item.logo ? (
						<img
							src={item.logo}
							alt={item.institution}
							className='w-full h-16 p-2 rounded-sm object-contain bg-slate-50'
						/>
					) : (
						<div className='h-16 w-full rounded-lg bg-neutral-100 dark:bg-neutral-800' />
					)}
					<div className='flex flex-col gap-1'>
						<InlineLink href={item.url} className='text-sm font-medium'>
							{item.institution}
						</InlineLink>
						<SmallText className='block'>{item.roles}</SmallText>
					</div>
				</li>
			))}
		</ul>
	</section>
);

export default AcademicSection;
