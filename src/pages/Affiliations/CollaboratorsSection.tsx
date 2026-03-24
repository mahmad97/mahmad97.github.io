import type { ReactElement } from 'react';

import {
	InlineLink,
	SmallText,
	Subheading,
	XlText,
} from '@/components/typography';
import { collaborators } from '@/data/affiliations.json';

const CollaboratorsSection = (): ReactElement => (
	<section className='flex flex-col gap-4'>
		<Subheading>Collaborators</Subheading>

		<ul className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
			{collaborators.map((item) => (
				<li key={item.name} className='flex flex-col'>
					<XlText className='text-blue-500 dark:text-blue-500'>
						{item.url ? (
							<InlineLink href={item.url}>{item.name}</InlineLink>
						) : (
							item.name
						)}
					</XlText>
					<SmallText className='block'>{item.affiliation}</SmallText>
				</li>
			))}
		</ul>
	</section>
);

export default CollaboratorsSection;
