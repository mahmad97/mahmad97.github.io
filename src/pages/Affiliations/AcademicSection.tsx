import type { ReactElement } from 'react';

import { InlineLink, SmallText, Subheading } from '@/components/typography';
import { academic } from '@/data/affiliations.json';

const AcademicSection = (): ReactElement => (
	<section className='flex flex-col gap-3'>
		<Subheading>Academic</Subheading>
		<ul className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
			{academic.map((item) => (
				<li
					key={item.institution}
					className='p-4 border flex flex-col items-center text-center gap-3 rounded-xl border-slate-400 dark:border-slate-600 transition-colors duration-200'>
					{item.logo ? (
						<img
							src={item.logo}
							alt={item.institution}
							className='w-full h-16 p-2 rounded-sm object-contain bg-slate-50'
						/>
					) : (
						<div className='w-full h-16 rounded-lg bg-neutral-100 dark:bg-neutral-800' />
					)}
					<div className='flex flex-col gap-1'>
						<SmallText className='font-semibold'>
							<InlineLink href={item.url}>{item.institution}</InlineLink>
						</SmallText>
						<SmallText className='block'>{item.roles}</SmallText>
					</div>
				</li>
			))}
		</ul>
	</section>
);

export default AcademicSection;
